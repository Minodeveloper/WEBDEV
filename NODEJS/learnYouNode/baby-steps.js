let numbers = process.argv.slice(2).map(x=>+x);

console.log(numbers.reduce((sum,num)=>{return sum=sum+num},0));