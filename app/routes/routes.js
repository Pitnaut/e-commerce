const express = require('express');
const productRouter = require('./product');
const registerRouter = require('./auth')
const router = express.Router();


router.use('/products', productRouter);
router.use('/register', registerRouter);

module.exports = router;


