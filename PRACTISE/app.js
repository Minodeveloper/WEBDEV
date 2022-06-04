// let b = []
// for(let i = 0; i < 10; b[i++]=9);
// console.log(b);

let frequency = {};

for(let letter of "mississippi")
{
    if(frequency[letter])
    {
        frequency[letter]++;
    }
    else{
        frequency[letter] = 1;
    }
}

console.log(frequency);