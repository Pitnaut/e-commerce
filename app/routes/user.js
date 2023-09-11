const express = require('express');
const router = express.Router();
const loginUser = require('../models/user');

router.post('/', loginUser)

module.exports = router;