const fs = require('fs');

fs.readdir(process.argv[2], callback);

function callback(err, list){
    for(let files of list){
        let nameArr = files.split('.');
        if(nameArr[1]=== `${process.argv[3]}`){
            console.log(files);
        }
    }
}