let http  = require('http');

http.createServer((request, response)=>{
    response.writeHead(200, {"Content-type":"text/plain"});
    response.write('<h1>HELLO! WORLD!</h1>');
    response.end();


}).listen(8888)