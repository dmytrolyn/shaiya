const express = require('express');
const router = express.Router();
const { fetchQuery } = require('../config/db');
const { guildsQuery, getGuildsCount } = require('../queries/queries');

router.get('/', fetchQuery(guildsQuery, "guilds"));

router.get('/count', fetchQuery(getGuildsCount));

module.exports = router;