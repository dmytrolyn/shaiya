const express = require('express');
const router = express.Router();
const { fetchQuery, runQuery } = require('../config/db');
const { ranksQuery, getPlayersCount } = require('../queries/ranks');
const setRank = require('../utils/ranks');
const defaultTitles = require('../utils/defaultTitles');

router.get('/', async (req, res) => {
    try {
        let resp = await runQuery(ranksQuery);
        let preparedData = resp.recordset.map(item => ({ ...item, Rank: setRank(item.K1) }));
        res.status(200).json({ titles: defaultTitles["ranks"], data: preparedData });
    } catch(err) {
        res.sendStatus(500)
    }
})

router.get('/count', fetchQuery(getPlayersCount));

module.exports = router;