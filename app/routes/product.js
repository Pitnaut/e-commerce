const express = require('express');
const router = express.Router();
const model = require('../models/products');

router.get('/', model.getAllProducts);
router.get('/:id', model.getProductById);

module.exports = router;

