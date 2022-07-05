let buttonOne = document.getElementById('one');
let divOne = document.querySelector('div');


buttonOne.addEventListener('click', ()=>{
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://icanhazdadjoke.com');
    xhr.setRequestHeader('Accept','application/json');

    xhr.onload = function(){
        // if(xhr.readyState === 4 && xhr.status === 200){
        //     let jsonData = xhr.responseText;
        //     console.log(jsonData);
        // }
        let jsonData = JSON.parse( xhr.responseText);
        divOne.innerText = jsonData.joke;
            
    }
    

    xhr.send();
})