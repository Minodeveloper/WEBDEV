function nam(a,b,c){
    console.log(a+b+c);
}

console.log(nam.length);
console.log(nam.name);

// function numberOftimesCalled(){
//     return numberOftimesCalled.callCount++;
// }

// numberOftimesCalled.callCount = 1;

// console.log(numberOftimesCalled());




// console.log([1,2,36,7,3].sort((a,b)=>{if((Number(a)-Number(b) )> 0)return b}));


// function max(first=-Infinity, ...rest)
// {
//     let maxvalue = first;
//     for(let k of rest)
//     {
//         if(k > maxvalue)
//         {
//             maxvalue = k;
//         }
//     }
//     return maxvalue;
// }

// console.log(max(2,4,56,97,988,98,8,89,768,0679));
// console.log(max.name);


// let obj =  {
//     x: 234,
//     f: function(){
//         console.log('HI')
//         return this
//     },
//     g: function() {
//         console.log('HOw Are yoiu!');
//     }
// }

// obj.f().g();


// const f = name => {return { name:name}};

// console.log(f('mino'));

// let squared = [1,2,3,4].map(x=>x*x);
// console.log(squared);


// let b = []
// for(let i = 0; i < 10; b[i++]=9);
// console.log(b);

// let frequency = {};

// for(let letter of "mississippi")
// {
//     if(frequency[letter])
//     {
//         frequency[letter]++;
//     }
//     else{
//         frequency[letter] = 1;
//     }
// }

// console.log(frequency);