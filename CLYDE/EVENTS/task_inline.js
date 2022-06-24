let buttonState = 0;

function magic() {
    if(buttonState === 0){

    let container = document.querySelector('#content');
    container.style.maxHeight = '200px'
    // console.log(container.style);

    let button = document.querySelector('#show-more');
    button.innerText = 'COLLAPSE';
    button.style.backgroundColor  = 'green'
    buttonState = 1;
    }else{
        let container = document.querySelector('#content');
        container.style.maxHeight = '148px'
        // console.log(container.style);
    
        let button = document.querySelector('#show-more');
        button.innerText = 'SHOW MORE';
        button.style.backgroundColor  = 'rgb(36, 82, 167)'
        buttonState = 0;

    }
    
}