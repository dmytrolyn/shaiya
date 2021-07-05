require('dotenv').config();

const express = require('express');
const passport = require('passport');

const { runPreparedQuery, runQuery } = require('../config/db');
const q = require('../queries/profile');
const uq = require('../queries/utils')
const router = express.Router();
const defaultTitles = require('../utils/defaultTitles');
const setRank = require('../utils/ranks');
const { getFirstFreeSlot } = require('../utils/db');

router.get('/user', passport.authenticate('jwt', { session: false }), (req, res) => {
    let { Pw, ...rest } = req.user;
    res.status(200).json({...rest});
})

router.post('/resurrect', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let { CharID } = req.body;
    try {
        // check existence of character
        let check = await runPreparedQuery(q.checkUserDeletedCharacter, { uid: req.user.UserUID, id: CharID });
        if(check.recordset[0].Count === 1) {
            let char = await runPreparedQuery(q.getCharNameById, { id: CharID });
            let charName = char.recordset[0].CharName;
            if(req.user.Point >= process.env.RESURRECTION_PRICE) {
                // get char data
                let checkChar = await runPreparedQuery(q.checkCharacterDataQuery, { id: CharID });
                let { Country, Family } = checkChar.recordset[0];
                if((Country === 0 && Family <= 1) || (Country === 1 && Family >= 2)) {
                    // get all user slots
                    let slotsResp = await runPreparedQuery(q.checkUserSlots, { uid: req.user.UserUID });
                    let slots = slotsResp.recordset;
                    // find the nearest empty slot
                    let slot = null;
                    for(let i = 0; i < 5; i++) {
                        if(slots.some(item => item.Slot === i)) {
                            continue;
                        } else {
                            slot = i;
                            break;
                        }
                    }
                    if(slot !== null) {
                        let lRes = await runPreparedQuery(q.resurrectQuery, { slot, id: CharID });
                        if(lRes.rowsAffected > 0) {
                            // pay for resurrection
                            await runPreparedQuery(q.reduceUserPoints, { uid: req.user.UserUID, diff: process.env.RESURRECTION_PRICE });
                            res.status(200).json({ resultCode: 0 });
                        } else {
                            res.status(200).json({ resultCode: 1, message: `Some error occurred while resurrecting char ${charName}, try later`, CharName: charName });
                        }
                    } else {
                        res.status(200).json({ resultCode: 1, message: "You have no empty slots" });
                    }
                } else if((Country === 1 && Family <= 1) || (Country === 0 && Family >= 2)) {
                    res.status(200).json({ resultCode: 1, message: `Change your faction to resurrect character ${charName}`, CharName: charName });
                } else if(Country === 2) {
                    res.status(200).json({ resultCode: 1, message: `Choose your faction to resurrect character ${charName}`, CharName: charName });
                } else {
                    res.status(200).json({ resultCode: 1, message: `Invalid character ${charName}`, CharName: charName });
                }
            } else {
                res.status(200).json({ resultCode: 1, message: "You do not have enough ZZ-points" });
            }
        } else {
            res.status(200).json({ resultCode: 1, message: `Character ${charName} does not exist`, CharName: charName });
        }
    } catch(err) {
        res.sendStatus(500);
    }
})

router.post('/delete', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let { CharID } = req.body;
    try {
        let check = await runPreparedQuery(q.checkUserActiveCharacter, { uid: req.user.UserUID, id: CharID });
        if(check.recordset[0].Count === 1) { 
            let delRes = await runPreparedQuery(q.deleteCharQuery, { uid: req.user.UserUID, id: CharID });
            if(delRes.rowsAffected > 0) {
                res.status(200).json({ resultCode: 0 });
            } else {
                let char = await runPreparedQuery(q.getCharNameById, { id: CharID });
                let charName = char.recordset[0].CharName;
                res.status(200).json({ resultCode: 1, message: `Some error ocurred, while deleting char ${charName} try later`, CharName: charName });
            }
        } else {
            res.status(200).json({ resultCode: 1, message: `Character ${charName} does not exist`, CharName: charName });
        }
    } catch(err) {
        res.sendStatus(500);
    }
})

router.get('/resurrect', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        let [deletedChars, activeChars] = await Promise.all([runPreparedQuery(q.deletedCharsQuery, { uid: req.user.UserUID }), runPreparedQuery(q.activeCharsQuery, { uid: req.user.UserUID })]);
        res.status(200).json({ deleted: { data: deletedChars.recordset, titles: defaultTitles["deletedChars"] },
                            active: { data: activeChars.recordset, titles: defaultTitles["activeChars"] },
                            price: process.env.RESURRECTION_PRICE });
    } catch(err) {
        res.sendStatus(500);
    }
})

router.post('/reward', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let { rank } = req.body;
    try {
        let freeSlot = await getFirstFreeSlot(req.user.UserUID);
        if(freeSlot !== null) {
            let kResp = await runPreparedQuery(q.userMaxKillsQuery, { uid: req.user.UserUID });
            let maxKills = kResp.recordset.reduce((curr, next) => next.K1 > curr ? next.K1 : curr, 0);

            if(rank > setRank(maxKills)) {
                res.status(200).json({ resultCode: 1, message: "You have not reached this rank yet" });
            } else {
                let itemResp = await runPreparedQuery(q.pvpRewardQuery, { rank });
                let { Item, Count } = itemResp.recordset[0];
                let purchase = await runPreparedQuery(uq.pushUserRewardItem, { uid: req.user.UserUID, slot: freeSlot, id: Item, count: Count, pc: "PvP Reward" });
                if(purchase.rowsAffected > 0) {
                    await runPreparedQuery(q.addPersonalRewardLogQuery, { uid: req.user.UserUID, rank });
                    res.status(200).json({ resultCode: 0 });
                } else {
                    res.status(200).json({ resultCode: 1, message: "Error while sending reward. Please, try later"});
                }
            }
        } else {
            res.status(200).json({ resultCode: 1, message: "You have no empty slots in your bank" });
        }
    } catch(err) {
        res.sendStatus(500);
    }
})

router.get('/rewards', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        let rewardsResp = await runQuery(q.pvpRewardsQuery);
        let receivedResp = await runPreparedQuery(q.personalPvpRewardsQuery, { uid: req.user.UserUID });
        let rewards = rewardsResp.recordset.map(({ Count, ItemName, ...data}, index) => ({...data, Item: `${ItemName} x${Count}` }));
        let kResp = await runPreparedQuery(q.userMaxKillsQuery, { uid: req.user.UserUID });
        let maxKills = kResp.recordset.reduce((curr, next) => next.K1 > curr ? next.K1 : curr, 0);
        res.status(200).json({ data: rewards, received: receivedResp.recordset, titles: defaultTitles["rewards"], current: setRank(maxKills) });
    } catch(err) {
        res.sendStatus(500);
    }
});

router.get('/spenders', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        let sResp = await runQuery(q.getSpendersQuery);
        let spenders = sResp.recordset;
        let siResp = await Promise.all(spenders.map(s => runPreparedQuery(q.getSpenderItems, { id: s.RowID })));
        let stResp = await Promise.all(spenders.map(s => runPreparedQuery(q.getSpenderStatus, { id: s.RowID, uid: req.user.UserUID })));
        let rsrResp = await Promise.all(spenders.map(s => runPreparedQuery(q.getSpenderRewards, { id: s.RowID, uid: req.user.UserUID })));

        let finalResponse = spenders.map((spender, index) => ({
            ...spender,
            items: siResp[index].recordset,
            status: stResp[index].recordset[0]?.Exp || 0,
            received: rsrResp[index].recordset.map(i => i.TieredSpenderLevel)
        }))
        res.status(200).json(finalResponse);
    } catch(err) {
        res.sendStatus(500);
    }
})

router.post('/spender', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let { spenderID, level, rowID } = req.body;

    try {
        let freeSlot = await getFirstFreeSlot(req.user.UserUID);

        if(freeSlot !== null) {
            let itemResp = await runPreparedQuery(q.getSpenderItem, { id: rowID });
            let purchase = await runPreparedQuery(q.pushUserRewardItem, { uid: req.user.UserUID, slot: freeSlot, id: itemResp.recordset[0].ItemID, count: itemResp.recordset[0].Count, pc: "Tiered spender" });
            if(purchase.rowsAffected > 0) {
                await runPreparedQuery(q.addSpenderRewardLog, { id: spenderID, level, uid: req.user.UserUID, row: rowID });
                res.status(200).json({ resultCode: 0 });
            } else {
                res.status(200).json({ resultCode: 1, message: "Error while sending reward. Please, try later"});
            }
        } else {
            res.status(200).json({ resultCode: 1, message: "You have no empty slots in Bank" });
        }
    } catch(err) {
        res.sendStatus(500);
    }
})

router.get('/roulette', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        let r = await Promise.all([runQuery(q.getRouletteItems), runPreparedQuery(q.getUserRouletteRewards, { uid: req.user.UserUID })]);
        let items = r[0].recordset.map(({ Rate, ItemID, ...item }) => ({...item}));
        res.status(200).json({ items: items, rewards: r[1].recordset, titles: defaultTitles['rouletteLogs'], price: process.env.SPIN_PRICE });
    } catch(err) {
        res.sendStatus(500);
    }
})

router.post('/roulette', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        let ir = await runQuery(q.getRouletteItems);

        let randBase = ir.recordset.reduce((result, next) => result.concat([...Array(next.Rate).keys()].map(() => ({...next}))), []);
        let randIndex = Math.floor(Math.random() * (randBase.length - 1));
        let reward = randBase[randIndex];

        if(req.user.Point >= process.env.SPIN_PRICE) {
            // search for nearest empty bank slot
            let freeSlot = await getFirstFreeSlot(req.user.UserUID);

            if(freeSlot !== null) {
                // push reward to bank
                let purchase = await runPreparedQuery(uq.pushUserRewardItem, { uid: req.user.UserUID, slot: freeSlot, id: reward.ItemID, count: reward.Count, pc: "Roulette" });
                if(purchase.rowsAffected > 0) {
                    // pay for spin and log it
                    let status = await Promise.all([runPreparedQuery(q.addRouletteSpinLog, { uid: req.user.UserUID, irid: reward.RowID }), 
                        runPreparedQuery(uq.reduceUserPoints, { uid: req.user.UserUID, diff: process.env.SPIN_PRICE })]);

                    if(status[0].rowsAffected[0] > 0 && status[1].rowsAffected[0] > 0) {
                        res.status(200).json({ resultCode: 0, reward: reward.RowID, message: `${reward.ItemName} x${reward.Count} was delivered to ${freeSlot} slot of Bank` });
                    } else {
                        res.status(200).json({ resultCode: 1, message: "Some error occurred while changing balance, try later" });
                    }
                } else {
                    res.status(200).json({ resultCode: 1, message: "Some error occurred, try later" });
                }
            } else {
                res.status(200).json({ resultCode: 1, message: "You have no empty slots in your Bank" });
            }
        } else {
            res.status(200).json({ resultCode: 1, message: "You don't have enough points to spin" });
        }
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
})

module.exports = router;

