const express = require('express');
const router = express.Router();
const db = require('../models/auth');

router.post('/', db.registerUser)

module.exports = router;