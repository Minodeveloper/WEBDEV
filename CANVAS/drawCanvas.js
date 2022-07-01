myCanvas = document.querySelector('#canv');

let context = myCanvas.getContext('2d');
console.log(context );

context.moveTo(160, 130);
context.lineTo(75, 200);
context.lineTo(150, 275);
context.lineTo(250, 235);
context.closePath();
context.lineWidth = 5;
context.strokeStyle = "#333333";
context.fillStyle = "#FFCC00";
context.fill();

context.stroke();

// context.moveTo(50,50);
// context.lineTo(250,200);
// context.closePath();
// context.lineWidth = 35;
// context.strokeStyle = 'steelblue';

// context.stroke()