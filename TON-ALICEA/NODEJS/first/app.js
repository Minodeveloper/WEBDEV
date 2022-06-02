function Person(yourname, yourage)
{
    this.name = yourname;
    this.age = yourage;
}
Person.prototype.sayHi = function(){console.log(`hello ${this.name}`)};

let employee1 = new Person('Atul', 45);
let employee2 = new Person('Mukesh', 43);


console.log(employee1);
employee1.sayHi();
employee2.sayHi();


console.log(employee1.__proto__);
console.log(employee2.__proto__);







// function names(params) {
//     let a  = 120;
//     let b = 23;
//     console.log(a+b);
//     params(345);

// }
// names(number=>{
//     console.log(number+2);
// });

// (function(number){console.log(number+10)})(10);