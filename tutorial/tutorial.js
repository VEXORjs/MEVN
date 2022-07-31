const {createServer} = require('http');

createServer(function (req, res) {
    res.writeHead(200,  { 'Content-Type': 'text/plain' });
    res.write('hello world \n');
    res.end();
}).listen(8080, '127.0.0.1');

console.log('Server running at https://127.0.0.1:8080/');