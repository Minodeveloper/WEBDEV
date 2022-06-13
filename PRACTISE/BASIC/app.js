

// xhr.open('GET','www.google.com',['async']);

let button = document.querySelector('button');
button.addEventListener('click', ()=>{
    let xhr = new XMLHttpRequest();
    // console.log('UNSENT',xhr.readyState);
    // console.log( xhr);
    
    let method = 'GET';
    let url = './message.txtz';

    xhr.open(method,url,true);
    // console.log('OPEN ', xhr.readyState);

    xhr.onload = () =>{
        console.log(xhr);
       
    }

    xhr.onreadystatechange = ()=>{
        if(xhr.readyState == 4 && xhr.status == 200){
            document.write(xhr.response)
        }
        else{
           if (xhr.status == 404){
                document.write('OOPS FILE NOR EXIXSTO')
            }
        }
        // console.log('CHANGED');
        // console.log(xhr.readyState);
    }

    xhr.send();
    

})





// let header = document.querySelector('h1');
// console.log(header);
// console.log(header.style.fontSize);
// let size = 10

// function fontPlusser(){
//     size = size+10;

//     header.style.fontSize = String(size)+'px';
// }
// setInterval(fontPlusser, 500);




// let images = document.querySelectorAll('img');
// console.log(images.length);
// let looper = 0;

// document.querySelector('button').addEventListener('click',()=>{
//     images[looper].style.width =" 500px";
//     looper++;
//     if(looper== images.length)
//     {
//         looper = 0;
//         document.querySelector('body').style.backgroundColor = 'green';
//     }
// })