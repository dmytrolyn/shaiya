require('dotenv').config();

const express = require('express');
const passport = require('passport');

const { runPreparedQuery, runQuery } = require('../config/db');
const { checkUserActiveCharacter, 
        checkUserDeletedCharacter,
        changeUserPoints, 
        checkCharacterDataQuery, 
        checkUserSlots, 
        resurrectQuery, 
        pvpRewardsQuery,
        deletedCharsQuery,
        activeCharsQuery, 
        getItemName,
        personalPvpRewardsQuery,
        getPersonalRewardQuery,
        userMaxKillsQuery,
        deleteCharQuery
    } = require('../queries/queries');
const router = express.Router();
const defaultTitles = require('../utils/defaultTitles');
const setRank = require('../utils/ranks');

router.get('/user', passport.authenticate('jwt', { session: false }), (req, res) => {
    let { Pw, ...rest } = req.user;
    res.status(200).json({...rest});
})

router.post('/resurrect', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let { CharID } = req.body;
    try {
        // check existence of character
        let check = await runPreparedQuery(checkUserDeletedCharacter, { uid: req.user.UserUID, id: CharID });
        if(check.recordset[0].Count === 1) {
            if(req.user.Point >= process.env.RESURRECTION_PRICE) {
                // get char data
                let checkChar = await runPreparedQuery(checkCharacterDataQuery, { id: CharID });
                let { Country, Family } = checkChar.recordset[0];
                if((Country === 0 && Family <= 1) || (Country === 1 && Family >= 2)) {
                    // get all user slots
                    let slotsResp = await runPreparedQuery(checkUserSlots, { uid: req.user.UserUID });
                    let slots = slotsResp.recordset;
                    // find the nearest empty slot
                    let slot = Array.from(Array(5).keys()).reduce((curr, next) => !slots.some(i => i === next) ? next : curr, null);
                    if(slot !== null) {
                        let lRes = await runPreparedQuery(resurrectQuery, { slot, id: CharID });
                        if(lRes.rowsAffected > 0) {
                            // pay for resurrection
                            await runPreparedQuery(changeUserPoints, { uid: req.user.UserUID, diff: process.env.RESURRECTION_PRICE });
                            res.status(200).json({ resultCode: 0 });
                        } else {
                            res.status(200).json({ resultCode:1, message: "Some error occurred, try later" });
                        }
                    } else {
                        res.status(200).json({ resultCode: 1, message: "You have no empty slots" });
                    }
                } else if((Country === 1 && Family <= 1) || (Country === 0 && Family >= 2)) {
                    res.status(200).json({ resultCode: 1, message: "Change your faction to resurrect the character" });
                } else if(Country === 2) {
                    res.status(200).json({ resultCode: 1, message: "Choose your faction to resurrect the character" });
                } else {
                    res.status(200).json({ resultCode: 1, message: "Invalid character. Please, try later" });
                }
            } else {
                res.status(200).json({ resultCode: 1, message: "You do not have enough ZZ-points" });
            }
        } else {
            res.status(200).json({ resultCode: 1, message: "Character does not exist" });
        }
    } catch(err) {
        res.sendStatus(500);
    }
})

router.post('/delete', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let { CharID } = req.body;
    try {
        let check = await runPreparedQuery(checkUserActiveCharacter, { uid: req.user.UserUID, id: CharID });
        if(check.recordset[0].Count === 1) { 
            let delRes = await runPreparedQuery(deleteCharQuery, { uid: req.user.UserUID, id: CharID });
            if(delRes.rowsAffected > 0) {
                res.status(200).json({ resultCode: 0 });
            } else {
                res.status(200).json({ resultCode: 1, message: "Some error ocurred, try later"});
            }
        } else {
            res.status(200).json({ resultCode: 1, message: "Character does not exist" });
        }
    } catch(err) {
        res.sendStatus(500);
    }
})

router.get('/resurrect', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        let [deletedChars, activeChars] = await Promise.all([runPreparedQuery(deletedCharsQuery, { uid: req.user.UserUID }), runPreparedQuery(activeCharsQuery, { uid: req.user.UserUID })]);
        res.status(200).json({ deleted: { data: deletedChars.recordset, titles: defaultTitles["deletedChars"] },
                            active: { data: activeChars.recordset, titles: defaultTitles["activeChars"] }});
    } catch(err) {
        res.sendStatus(500);
    }
})

router.post('/reward', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let { rank } = req.body;
    try {
        let kResp = await runPreparedQuery(userMaxKillsQuery, { uid: req.user.UserUID });
        let maxKills = kResp.recordset.reduce((curr, next) => next.K1 > curr ? next.K1 : curr, 0);
        if(rank > setRank(maxKills)) {
            res.status(200).json({ resultCode: 1, message: "You have not reached this rank yet" });
        }
        await runPreparedQuery(getPersonalRewardQuery, { uid: req.user.UserUID, rank });
        res.status(200).json({ resultCode: 0 });
    } catch(err) {
        res.sendStatus(500);
    }
})

router.get('/rewards', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        let rewardsResp = await runQuery(pvpRewardsQuery);
        let receivedResp = await runPreparedQuery(personalPvpRewardsQuery, { uid: req.user.UserUID });
        let itemsPromises = rewardsResp.recordset.map(row => runPreparedQuery(getItemName, { id: row.Item }));
        let itemNames = await Promise.all(itemsPromises);
        let rewards = rewardsResp.recordset.map(({ Count, ...data}, index) => ({...data, Item: `${itemNames[index].recordset[0].ItemName} x${Count}` }));
        let receivedRewards = receivedResp.recordset;
        let kResp = await runPreparedQuery(userMaxKillsQuery, { uid: req.user.UserUID });
        let maxKills = kResp.recordset.reduce((curr, next) => next.K1 > curr ? next.K1 : curr, 0);
        res.status(200).json({ data: rewards, received: receivedRewards, titles: defaultTitles["rewards"], current: setRank(maxKills) });
    } catch(err) {
        console.log(err)
        res.sendStatus(500);
    }
});

module.exports = router;

