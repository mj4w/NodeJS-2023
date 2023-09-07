// capital when you calling product class
const Product = require('../models/product');

exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => {
        // this is for pug
        res.render('shop/product-list', 
        {prods: products, 
        docTitle: 'ALL Products',
        path:'/products', hasProducts: 
        products.length>0,
        activeShop:true,
        productCSS:true,
        });
    });

    // console.log('shop.js',adminData.products);
    // // cd to views the folder name & next the file name
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); // send a response
};

exports.getIndex = (req,res,next) => {
    Product.fetchAll(products => {
        // this is for pug
        res.render('shop/index', 
        {prods: products, 
        docTitle: 'Shop',
        path:'/', hasProducts: 
        products.length>0,
        activeShop:true,
        productCSS:true,
        });
    });
};

exports.getCart = (req,res,next) => {
    res.render('shop/cart', {
        docTitle: 'Cart',
        path: '/cart',
    });
};

exports.getCheckout = (req,res,next) => {
    res.render('shop/checkout', {
        path: 'checkout',
        docTitle: 'Checkout',
    })
};

exports.getOrder = (req,res,next) => {
    res.render('shop/order', {
        path: '/order',
        docTitle: 'Your Order',
    });
};
