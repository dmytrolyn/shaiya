const express = require('express');
const router = express.Router();
const passport = require('passport');
const { fetchQuery, runPreparedQuery, runQuery } = require('../config/db');
const q = require('../queries/shop');
const uq = require('../queries/utils');
const pq = require('../queries/profile');
const { getFirstFreeSlot } = require('../utils/db');

router.get('/', fetchQuery(q.getShopItems));

router.get('/donate', passport.authenticate('jwt', { session: false }), fetchQuery(q.getDonateItems));

router.post('/buy', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let { id } = req.body;
    try {
        let iResp = await runPreparedQuery(q.getShopItem, { id });
        let item = iResp.recordset[0];
        if(req.user.Point > item.Price && req.user.Point !== 0) {
            let slot = await getFirstFreeSlot(req.user.UserUID);
            if(slot !== null) {
                let chResp = await runPreparedQuery(uq.reduceUserPoints, { diff: item.Price, uid: req.user.UserUID });
                if(chResp.rowsAffected[0] > 0) {
                    let bResp = await runPreparedQuery(uq.pushUserRewardItem, { uid: req.user.UserUID, slot, id: item.ItemID, count: item.Count, pc: "Item Mall" });
                    if(bResp.rowsAffected[0] > 0) {
                        let spenders = await runQuery(pq.getSpendersQuery);
                        let rs = await Promise.all(spenders.recordset.map(sp => runPreparedQuery(pq.getSpenderStatus, { id: sp.RowID, uid: req.user.UserUID })))
                        await Promise.all(rs.map((r, index) => {
                            let set = r.recordset;

                            if(set.length > 0) {
                                return runPreparedQuery(pq.updateSpenderStatus, { uid: req.user.UserUID, id: spenders.recordset[index].RowID, exp: item.Price });
                            } else {
                                return runPreparedQuery(pq.insertSpenderStatus, { uid: req.user.UserUID, id: spenders.recordset[index].RowID, exp: item.Price });
                            }
                        }))
                        await runPreparedQuery(q.pushShopLog, { uid: req.user.UserUID, id: item.RowID });
                        res.status(200).json({ resultCode: 0, message: `Item ${item.ItemName} x${item.Count} was successfully delivered to ${slot} slot of Bank` });
                    } else {
                        res.status(200).json({ resultCode: 1, message: "Error while sending purchase" });
                    }
                } else {
                    res.status(200).json({ resultCode: 1, message: "Error while checking user balance" });
                }
            } else {
                res.status(200).json({ resultCode: 1, message: "You don't have free bank slot to gain purchase" });
            }
        } else {
            res.status(200).json({ resultCode: 1, message: `You don't have enough SP to buy item ${item.Title} x${item.Count}` });
        }
    } catch(err) {
        res.sendStatus(500);
    }
})

module.exports = router;