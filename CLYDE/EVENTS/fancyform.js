let output = document.getElementById('output');

let nameText = document.querySelector('#name');

document.querySelector('form').addEventListener('submit',
(event)=>{
    event.preventDefault()
    output.textContent = `A submit event has been fired at ${event.timeStamp}`
}
)

nameText.addEventListener('input', ()=>{
    output.textContent = `The value entered is ${nameText.value}`
})

nameText.addEventListener('focus',(e)=>{
    e.target.style.background = 'lightblue';
    e.target.style.color = 'black';
    console.log(e.timeStamp);


})

nameText.addEventListener('paste',(e)=>{
    alert('YOU HAVE COPIED!!!!!!!')


})

