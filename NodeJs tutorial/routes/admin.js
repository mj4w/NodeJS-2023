const express = require('express');
const path = require('path');

// const rootDir = require('../util/path');

const router = express.Router();

//variable to store
const products = [];

//request and response 
router.get('/add-product',(req,res,next) => {
    res.render('add-product',{docTitle: 'Add Product'})
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); // send a response
});

router.post('/add-product', (req,res,next) => {
    const addProduct = { title: req.body.title, description: req.body.description }
    products.push(addProduct);
    res.redirect('/');

});


exports.routes = router;
exports.products = products;