function requestListener(){
    // console.log('This is what the request now looks like', this);

    let data = JSON.parse(xhr.responseText);
    // console.log('the response text now converted to JSON', data);
    console.log( data.results[0].name);

    document.querySelector('img').src = data.results[0].picture.large;
    document.querySelector('p').innerText = `${data.results[0].name.title}  ${data.results[0].name.first} ${data.results[0].name.last} `


}

function requestError() {
    console.log('oops i did it again!');
}





let url = "https://randomuser.me/api/";
let method = 'GET';

let xhr = new XMLHttpRequest();

// console.log('This is what our request loks like initially!', xhr);

xhr.open(method, url);


xhr.onload = requestListener;

xhr.onerror = requestError;


xhr.send();