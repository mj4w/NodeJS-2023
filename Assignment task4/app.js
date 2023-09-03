const express = require('express');
const app = express();
const path = require('path');
const users = require('./users');
const forms = require('./forms');
const bodyParser = require('body-parser');

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(users);
app.use(forms.routes);

app.listen(3000,() => {
    console.log('This server is running in port 3000')
})