const image = document.querySelector('img');

let newElement = document.createElement('p');

newElement.innerText = "I've been clicked";

image.addEventListener('click', (event)=>{
    document.body.appendChild(newElement);
    // console.log('hello');
})