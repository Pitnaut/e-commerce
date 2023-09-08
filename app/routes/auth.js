const express = require('express');
const router = express.Router();
const db = require('../queries/auth');

router.post('/', db.registerUser)

module.exports = router;