myCanvas = document.querySelector('#canv');

let context = myCanvas.getContext('2d');

console.log(context );


context.fillStyle = '#ffff00';

context.font = "20px Sans-Serif";
context.textBaseline = 'top';
context.fillRect(0,0,500,300)
context.fillStyle = '#000000';
context.fillText ("Hello World!", 195, 80)





