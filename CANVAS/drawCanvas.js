const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

})

const mouse = {
    x:null,
    y:null
}

canvas.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;

})
canvas.addEventListener('mousemove', animate)

function drawCircle(e){
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;
    
    
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    // ctx.fillStyle = 'green';
    
    ctx.beginPath();
    ctx.arc(e.x,e.y,20,0, Math.PI*2);
    ctx.fill()
    
}

function animate(e) {
    ctx.clearReact(0,0,canvas.width, canvas.height);
    drawCircle(e);
    requestAnimationFrame(animate);
    
}

animate()

