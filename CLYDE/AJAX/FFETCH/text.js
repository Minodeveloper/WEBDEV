let firstPromise = new Promise((resolve, reject)=>{
    let animal  = 'warthog';
    resolve(animal);
}); 

firstPromise.then((animal)=>{
    console.log(animal);
    console.log('DON!');
})