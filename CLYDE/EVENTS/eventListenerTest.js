document.querySelector('#note').textContent = "This is pure DOM manipulation."


const circle = document.querySelector('#circle');

function randomColor() {
    return Math.floor(Math.random() * 255);
    
}
function colorChange(){
    circle.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`
}
circle.addEventListener('click', colorChange);
// circle.style.backgroundColor = 'pink'; 