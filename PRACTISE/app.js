

let XHR = new XMLHttpRequest();









// const k = [{
//     "mino":78,
//     "hino":89
// },
// {
//     l:23,
//     h:123

// }];

// let Json = JSON.stringify(k);
// console.log(Json);
// console.log(JSON.parse(Json));

// console.log();


//   twoSum([1234,5678,9012], 14690);


// function isValidWalk(walk) {
//     //   let minutes = 0;
//       if(walk.length != 10) return false;
//       if(walk.length % 2 !== 0) return false;
      
      
//       let dirArraySliced = walk.slice(0, walk.length / 2 );
//       let checkArray = [];
//       for (let item of  dirArraySliced){
//         switch(item){
//             case 'n':
//               checkArray.push('s');
//               break;
//             case 's':
//               checkArray.push('n');
//               break;
//             case 'e':
//               checkArray.push('w');
//               break;
//             case 'w':
//               checkArray.push('e');
//               break;
                  
//         }
//       }
      
//       if([...checkArray].sort().join('') == [...walk.slice(walk.length/2)].sort().join('')) 
//         {
//               return true;
//         }
//          else
//               {
//                return false;
//                 }         
      
    
//     }
// console.log(isValidWalk( ['n','s','n','s','n','s','n','s','n','s'] ));
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
// console.log(isValidWalk(['w']));
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
// console.log(isValidWalk([ 'e', 'e', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w' ]));

// function isValidWalk(walk){
//     let dx = 0;
//     let dy = 0;
//     if(walk.length != 10) return false;

//     for(let mov of walk){
//         switch(mov){
//             case 'n': dx++; break;
//             case 's': dx--; break;
//             case 'e': dy++; break;
//             case 'w': dy--; break;
//         }
//     }
//     return (dx==0 && dy==0)?true:false;
// }
  

// let func = ()=>{
//     try{
//         const k = "kilo";
//         // k = 'lolo';
//         let l = {name:"mino", car:87};
//         console.table(l);

//     }catch(error)
//     {
//         // console.table(error);
//         // console.table(l);



//     }
    
// }
// func();


// class Myclass {
//     constructor(name,age,score)
//     {
//         this.name = name;
//         this.age = age;
//         this.score = score;
//     }
//     displayScore(){
//         console.log(`score is ${this.score}`);
//     }
//     displayName(){
//         console.log(`Name is ${this.name}`);
//     }
//     displayAge(){
//         console.log(`Age is ${this.age}`);
//     }
// }

// let kiwi  = new Myclass('patahan',34,1234);

// console.log(kiwi);
// kiwi.displayAge();
// kiwi.displayName();
// kiwi.displayScore();
//  console.log(kiwi);


// //ocebject inheritane and destructuring them


// let vehicle = {
//     wheels: 4,
//     speed: 100
// }

// const {wheels: numbaWheels, speed: spheed} = vehicle;
// console.log(numbaWheels);
// console.log(spheed);

// let maruti =  Object.create(vehicle);
// const {wheels: numbaWheels2, speed: spheed2} = maruti;
// console.log(numbaWheels2);
// console.log(spheed2);
////////////////////
// console.log(maruti);
// console.log(maruti.wheels);
// maruti.wheels = 78;
// console.log(maruti);

// console.log(maruti.wheels);









// function nam(a,b,c){
//     console.log(a+b+c);
// }

// console.log(nam.length);
// console.log(nam.name);

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