const express = require('express');
const route = express.Router();

const path = require('path');

route.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'homepage.html'));
});

module.exports = route;
