const http = require('http');

const routes = require('./routesAssign');

const server = http.createServer(routes.handler);
server.listen(3000);