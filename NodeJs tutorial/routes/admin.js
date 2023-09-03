const express = require('express');
const path = require('path');
const productsController = require('../controllers/product');

// const rootDir = require('../util/path');

const router = express.Router();

//request and response 
router.get('/add-product',productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);


module.exports = router;
