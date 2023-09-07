// capital when you calling product class
const Product = require('../models/product');


exports.getAddProduct = (req,res,next) => {
    res.render('admin/add-product',{
    docTitle: 'Add Product',
    path:'/admin/add-product',
    activeAddProduct: true
    })
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); // send a response
};

exports.postAddProduct = (req,res,next) => {
    const title = req.body.title
    const description = req.body.description
    const imageUrl = req.body.imageUrl
    const price = req.body.price
    const product = new Product(title,description,imageUrl,price);
    product.save();
    res.redirect('/');

};

exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => {
        // this is for pug
        res.render('admin/products', 
        {prods: products, 
        docTitle: 'Shop',
        path:'/admin/products', hasProducts: 
        products.length>0,
        activeShop:true,
        productCSS:true,
        });
    });
};
