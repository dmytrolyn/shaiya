const express = require('express');
const router = express.Router();
const { runPreparedQuery, fetchQuery, runQuery } = require('../config/db');
const { getBossRespawnQuery, getOnlineQuery, getTop10Killers, getTop10Guilds, getKillLogs } = require('../queries/queries');
const setMap = require('../utils/maps');
const bossIds = require('../utils/bossId');
const defaultTitles = require('../utils/defaultTitles');

router.get('/bosses', async(req, res) => {
    try {
        let param = req.query.short;
        let ids = param ? 
        [...bossIds].splice(0, 10).map(param => runPreparedQuery(getBossRespawnQuery, param)) 
        : bossIds.map(param => runPreparedQuery(getBossRespawnQuery, param));

        let response = await Promise.allSettled(ids).then(resp => resp.map(r => r.value));
        let data = response.map(row => row.recordset[0]).map(item => ({ ...item, MapID: setMap(item.MapID) })); 
        res.status(200).json({ titles: param ? defaultTitles["bosses2"] : defaultTitles["bosses"], data });
    } catch(err) {
        res.sendStatus(500);
    }
});

router.get('/players', fetchQuery(getTop10Killers, "topKillers"));

router.get('/kills', async(req, res) => {
    try {
        let response = await runQuery(getKillLogs);
        let data = response.recordset.map(item => ({ ...item, MapID: setMap(item.MapID) }));
        res.status(200).json({ data, titles: defaultTitles["kills"] })
    } catch(err) {
        console.log(err)
        res.sendStatus(500);
    }
});

router.get('/guilds', fetchQuery(getTop10Guilds, "topGuilds"));

router.get('/online', fetchQuery(getOnlineQuery));

module.exports = router;