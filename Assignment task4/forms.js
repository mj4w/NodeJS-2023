const express = require('express');
const router = express.Router();

const usersDisplay = [];

router.get('/',(req,res,next) => {
    res.render('forms',{title:'forms'});
});

router.post('/', (req,res,next) => {
    const addUser = {title:req.body.title}
    usersDisplay.push(addUser);
    res.redirect('/users');
});




exports.routes = router;
exports.usersDisplay = usersDisplay;