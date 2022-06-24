document.querySelector('#note').textContent = "This is pure DOM manipulation."


const circle = document.querySelector('#circle');

function colorChange(){
    circle.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    console.log(`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`);


}
circle.addEventListener('click', colorChange);
// circle.style.backgroundColor = 'pink'; 