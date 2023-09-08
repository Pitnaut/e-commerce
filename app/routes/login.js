const express = require('express');
const router = express.Router();
const loginUser = require('../models/login');

router.post('/', loginUser)

module.exports = router;