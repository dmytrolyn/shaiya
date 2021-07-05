const express = require('express');
const router = express.Router();
const { runPreparedQuery, fetchQuery, runQuery } = require('../config/db');
const q = require('../queries/recent');
const setMap = require('../utils/maps');
const bossIds = require('../utils/bossId');
const defaultTitles = require('../utils/defaultTitles');

router.get('/bosses', async(req, res) => {
    try {
        let param = req.query.short;
        let ids = param ? 
        [...bossIds].splice(0, 10).map(param => runPreparedQuery(q.getBossRespawnQuery, param)) 
        : bossIds.map(param => runPreparedQuery(q.getBossRespawnQuery, param));

        let response = await Promise.allSettled(ids).then(resp => resp.map(r => r.value));
        let bs = response.map(row => row.recordset[0]);

        let data = bs.reduce((result, item) => item ? [...result, { ...item, MapID: setMap(item.MapID)}] : result, []); 
        res.status(200).json({ titles: param ? defaultTitles["bosses2"] : defaultTitles["bosses"], data });
    } catch(err) {
        res.sendStatus(500);
    }
});

router.get('/players', fetchQuery(q.getTop10Killers, "topKillers"));

router.get('/guilds', fetchQuery(q.getTop10Guilds, "topGuilds"));

router.get('/online', async (req, res) => {
    try {
        let onlineResp = await Promise.all([runQuery(q.getOnlineQuery), runQuery(q.getAoLCharsQuery), runQuery(q.getUoFCharsQuery)]);
        let [online, aol, uof] = onlineResp;
        res.status(200).json({ online: online.recordset[0].Count, aol: aol.recordset[0].Count, uof: uof.recordset[0].Count });
    } catch(err) {
        res.sendStatus(500);
    }
});

module.exports = router;