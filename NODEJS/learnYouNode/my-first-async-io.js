const fs = require('fs');

let buff = fs.readFile(`${process.argv[2]}`,"utf8", callback);


function callback(err,data){
    let count = 0;

    for(let char of data){
        if(char === '\n'){
            count++;
        }
    }
        console.log( count);

}
