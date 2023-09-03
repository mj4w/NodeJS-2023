const express = require('express');
const router = express.Router();
const productsController = require('../controllers/product');

router.get('/',productsController.getProducts);

module.exports = router;