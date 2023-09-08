const express = require('express');
const router = express.Router();
const db = require('../queries/products');

router.get('/', db.getAllProducts);
router.get('/:id', db.getProductById);

module.exports = router;
