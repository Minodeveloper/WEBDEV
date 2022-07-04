let http = require('http');
let url = require('url');

function starts(route){
function onRequest(request, response){
    console.log(request.url);
    let pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received");

    route(pathname);
    
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("HELLO WORLD!");
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("SERVER HAS STARTED!");

}

exports.starts = starts;

// let http  = require('http');

// http.createServer((request, response)=>{
//     response.writeHead(200, {"Content-type":"text/plain"});
//     response.write('HELLO! WORLD!');
//     response.end();


// }).listen(8888)