const http = require('http');
const fs = require('fs');
var server = http.createServer(function (req, resp) {
    resp.writeHead(200,{'Content-Type':'text/html'})
    resp.write('1234');
    resp.end();
})
server.listen(1000)