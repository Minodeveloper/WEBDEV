const fs = require('fs');

let buff = fs.readFileSync(`${process.argv[2]}`);

let count = 0

for(let char of buff.toString()){
    if (char === '\n'){
        count++;
        
    }
}
console.log(count);
// console.log(buff.toString());