let header = document.querySelector('h1');
console.log(header);
console.log(header.style.fontSize);
let size = 10

function fontPlusser(){
    size = size+10;

    header.style.fontSize = String(size)+'px';
}
setInterval(fontPlusser, 500);




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