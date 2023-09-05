const express = require('express');
const router = express.Router();
const db = require('../db/queries');

  router.get('/', db.getAllProducts);

  module.exports = router;
