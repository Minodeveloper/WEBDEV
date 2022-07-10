const http = require('http');

const req = http.request('http://www.google.com', (response)=>{
    response.on('data', (chunk)=>{
        console.log(`DATA CHUNK IS ${chunk}`);

    });
    response.on('end', ()=>{
        console.log('NO MORE DATA!');
    })
});

req.end();