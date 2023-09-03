const express = require('express');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const pageNotFound = require('./controllers/404');
const bodyParser = require('body-parser');
// const hbs = require('express-handlebars'); 

const app = express();

// Set global template engine settings
app.set('view engine', 'ejs');
app.set('views','views');



// app.set('views', 'views');
// app.engine('hbs', hbs.engine({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout',
//     extname: 'hbs'
// }));
// app.set('view engine', 'hbs'); // Set 'hbs' as the view engine

// Static files for CSS styles
app.use(express.static(path.join(__dirname, 'public')));

// bodyParser setup (You can also use express.urlencoded() instead)
app.use(bodyParser.urlencoded({ extended: false }));

// Routes setup
app.use('/admin',adminRoutes);
app.use(shopRoutes);

// Handling 404 Not Found
app.use(pageNotFound.get404Page);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});