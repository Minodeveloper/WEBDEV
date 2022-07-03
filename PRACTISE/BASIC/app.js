console.log('hello');

// window.onload = function(){
//     document.body.style.backgroundColor = 'red';
// }
let xhr  = new XMLHttpRequest();

// console.log(xhr.readyState);
// console.log(xhr.status);
// console.log(xhr);


// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//         console.log('ALL DONE!');
//         console.log(xhr.readyState," ", xhr.status);

//     }

// }
xhr.open('GET', "https://jsonplaceholder.typicode.com/posts")

xhr.send()


// console.log(xhr);

let quoteButton =  document.querySelector('#quoteB');
quoteButton.addEventListener('click', displayQuote);

function displayQuote(){
    let displayArea = document.querySelector('#quote');
   
// console.log(JSON.parse(xhr.responseText)[0].title);
//  displayArea.innerText =  JSON.parse(xhr.responseText)[3].title;
 displayArea.innerText =  xhr.getResponseHeader('content-type');

}
