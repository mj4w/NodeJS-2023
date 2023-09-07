const products = [];
//constructor Function
// next gen javascript
const fs = require('fs');
const path = require('path');


const p = path.join(path.dirname(process.mainModule.filename), 'data',
'products.json'
);
const getProductsFromFile = (cb) => {
    fs.readFile(p, (err,fileContent) => {
        if (err) {
            return cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
    return products;
};

module.exports = class Product {
    constructor(title,description,imageUrl,price){
        this.title = title
        this.description = description
        this.imageUrl = imageUrl
        this.price = price
    }
    save(){
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),err => {
                console.log(err);
            });
        });

    }
    static fetchAll(cb){
        getProductsFromFile(cb);
        
    }
}
