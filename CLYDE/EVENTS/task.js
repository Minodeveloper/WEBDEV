const title = document.querySelector('#title');
const firstP = document.querySelector('#first-paragraph');
const secondP = document.querySelector('#second-paragraph');

function color(color){
    console.log(color);

    title.style.color = color;
    firstP.style.color = color;
    secondP.style.color = color;

}
// function blue(){

//     title.style.color = 'blue'
//     firstP.style.color = 'blue'
//     secondP.style.color = 'blue'

// }
// function red(){

//     title.style.color = 'red'
//     firstP.style.color = 'red'
//     secondP.style.color ='red'

// }