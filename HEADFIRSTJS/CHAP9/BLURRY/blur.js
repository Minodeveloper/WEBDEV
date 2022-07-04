// document.querySelector('#zero').addEventListener('click', cle);
document.body.addEventListener('click', cle);



function cle (e){
    // document.querySelector('#zero').src = './zero.jpg';
    // setTimeout(()=>{
    //     document.querySelector('#zero').src = './zeroblur.jpg'
    // }, 2000)
    e.stopPropagation();
    e.target.src = `./${e.target.id}.jpg`
}

