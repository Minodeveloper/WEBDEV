document.querySelector('#zero').addEventListener('click', cle);


function cle (){
    document.querySelector('#zero').src = './zero.jpg';
    setTimeout(()=>{
        document.querySelector('#zero').src = './zeroblur.jpg'
    }, 2000)

}

