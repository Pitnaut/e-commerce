const express = require('express');
const productRouter = require('./product');
const registerRouter = require('./auth');
const loginRouter = require('./login');
const router = express.Router();


router.use('/products', productRouter);
router.use('/register', registerRouter);
router.use('/login', loginRouter);

module.exports = router;


