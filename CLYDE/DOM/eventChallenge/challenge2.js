const background = document.querySelector('#bg');

let onMouseMove = (event)=>{
    let message = document.querySelector('#message');
    message.textContent += 'Hi ';

    let dotDiv = document.createElement('div');
    dotDiv.className = 'dot';
    dotDiv.style.top = `${event.clientY}px`
    dotDiv.style.left = `${event.clientX}px`


    document.body.appendChild(dotDiv); 
    
}

background.addEventListener('mousemove', onMouseMove)