const express = require('express');
const path = require('path');
const adminController = require('../controllers/admin');

// const rootDir = require('../util/path');

const router = express.Router();

//request and response 
// /admin/add-product => GET
router.get('/add-product',adminController.getAddProduct);
// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/products',adminController.getProducts);

module.exports = router;


