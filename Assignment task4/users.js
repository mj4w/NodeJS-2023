const express = require('express');
const router = express.Router();
const path = require('path');
const forms = require('./forms');


router.get('/users',(req,res,next) => {
    const names = forms.usersDisplay;
    console.log(names)
    res.render('users',{title: 'Users', name:names});
});


module.exports = router;