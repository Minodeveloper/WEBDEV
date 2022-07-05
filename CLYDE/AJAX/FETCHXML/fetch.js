let buttonTwo = document.getElementById('two');


buttonTwo.addEventListener('click', ()=>{
   
    fetch('https://icanhazdadjoke.com',
    {headers:{"Accept":"application/json"}})
    .then((response)=>{
       return response.json();
    })
    .then((jokeObject)=>{
        return jokeObject.joke.toUpperCase();
    })
    .then((finalJoke)=>{
        divOne.innerText = finalJoke;
    })
    .catch((e)=>{
        console.log('ERROE',e);
    })
})