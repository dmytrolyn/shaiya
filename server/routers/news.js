const express = require('express');
const router = express.Router();
const { fetchQuery } = require('../config/db');
const { getNewsQuery } = require('../queries/news');

router.get('/', fetchQuery(getNewsQuery));

module.exports = router;