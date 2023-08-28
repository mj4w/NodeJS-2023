const express = require('express');
const router = express.Router();
const path = require('path');
const adminData = require('./admin');

router.get('/',(req,res,next) => {
    const products = adminData.products;
    // this is for pug
    res.render('shop', {prods: products, docTitle: 'Shop Products'});
    // console.log('shop.js',adminData.products);
    // // cd to views the folder name & next the file name
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); // send a response
});

module.exports = router;