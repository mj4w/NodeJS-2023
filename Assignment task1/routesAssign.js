const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    
    if (url === '/'){
        res.setHeader('Content-Type','text/html');

        res.write('<html>');
        res.write('<head><title>Welcome users</title></head>');
        res.write(
            '<body><h1>Welcome User</h1><form method="POST" action="/create-user"><input type="text" name="create-user" /><button type="submit">Send</button></form></body>'
            
            );
        res.write('</html>');
        return res.end();
    };
    if (url === '/create-user' && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const createUser = parsedBody.split('=')[1];
            console.log(createUser);
            res.setHeader('Content-Type','text/html');
            res.write('<html>');
            res.write('<head><title>Users</title></head>');
            res.write(`<body><ul><li>${createUser}</li></ul></body>`);
            return res.end();
            
        });
    };

  


};

module.exports = {
    handler: requestHandler
};