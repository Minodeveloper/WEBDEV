let buttonThree = document.getElementById('three');


buttonThree.addEventListener('click', displayJoke);


async function displayJoke(){
    let response =  await fetch('https://icanhazdadjoke.com',{headers:{"Accept":"application/json"}});
    let jokeObject = await response.json();
    let lowerCase = jokeObject.joke.toLowerCase();
    divOne.innerText = lowerCase;
    
}