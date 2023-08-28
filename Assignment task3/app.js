const express = require('express');
const usersRoute = require('./routes/users');
const homeRoute = require('./routes/homeUser');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(usersRoute);
app.use(homeRoute);


app.listen(1000);
