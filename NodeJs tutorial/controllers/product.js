// capital when you calling product class
const Product = require('../models/product');

exports.getAddProduct = (req,res,next) => {
    res.render('add-product',{
    docTitle: 'Add Product',
    path:'/admin/add-product',
    activeAddProduct: true
    })
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); // send a response
};

exports.postAddProduct = (req,res,next) => {
    const product = new Product(req.body.title,req.body.description);
    product.save();
    res.redirect('/');

};


exports.getProducts = (req,res,next) => {
    const products = Product.fetchAll(products => {
        // this is for pug
        res.render('shop', 
        {prods: products, 
        docTitle: 'Shop Products',
        path:'/', hasProducts: 
        products.length>0,
        activeShop:true,
        productCSS:true,
        });
    });

    // console.log('shop.js',adminData.products);
    // // cd to views the folder name & next the file name
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); // send a response
};

