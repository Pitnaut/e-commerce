const express = require('express');
const productRouter = require('./product');
const router = express.Router();


router.use('/products', productRouter);

module.exports = router;


