myCanvas = document.querySelector('#canv');

let context = myCanvas.getContext('2d');
console.log(context );

context.beginPath();
context.arc(200, 200, 93, Math.PI, 2*Math.PI, false);
context.fillStyle = '#FF6A6A';
context.fill();