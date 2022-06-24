function color(){
    document.querySelector('body').style.backgroundColor = 'red';
    // alert('BOOM!') 

}

let btn = document.querySelector('button');

btn.addEventListener('click', color);