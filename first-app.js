const fs = require('fs');
const hello = "Hello World";
console.log(hello);
fs.writeFileSync('hello.txt','Hello there');