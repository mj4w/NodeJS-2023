const express = require("express");
const app = express();

app.use('/user',(req,res,next) => {
    console.log('Hello user!');
    res.send('<h1>User</h1>')
});

app.use('/',(req,res,next) => {
    console.log('Homepage');
    res.send('<h1>Homepage</h1>')

});

app.listen(8000);
