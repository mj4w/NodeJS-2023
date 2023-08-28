const express = require('express');
const path = require('path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');

const app = express();

//set globally template engine
app.set('view engine', 'pug');
app.set('views', 'views');

//static for css style
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminData.routes);
app.use(shopRoutes);

// handling 404 not found 
app.use((req,res,next) => {
    res.status(404).render('404/PageNotFound',{not:'Page Not Found'})
    // res.status(404).sendFile(path.join(__dirname, './', 'views/404', 'PageNotFound.html'));

});

app.listen(3000);
