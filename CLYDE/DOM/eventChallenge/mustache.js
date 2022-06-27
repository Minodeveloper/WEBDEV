let face = document.querySelector('#face');
let mooch =  document.querySelector('#mooch');

face.addEventListener('click', (e)=>{
    // console.log( mooch.style);
    // console.log(e.clienX, e.clientY);
    mooch.style.top = `${e.clientY-174/2}px`;
    mooch.style.left = `${e.clientX - 321/2}px` ;
})