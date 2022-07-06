let formAdd = document.getElementById('add-item');

formAdd.addEventListener('submit', (e)=>{
    e.preventDefault();

    let text = formAdd.querySelector('input[type="text"]').value;

    let li          = document.createElement('li');
    let groceryName = document.createElement('span');
    let deleteButton = document.createElement('span');
    
    deleteButton.classList.add('delete');
    groceryName.classList.add('item');

    groceryName.innerText = text;
    deleteButton.innerText = 'delete';

    li.appendChild(groceryName);
    li.appendChild(deleteButton);
    
    
    ul.appendChild(li);
   
})






/////////////////////////////////////////
let ul = document.querySelector("ul");

ul.addEventListener('click', (e)=>{

    let target = e.target;
    if(target.className == 'delete')
    {
        let li = target.parentElement;
        li.remove();
    }
})


/////////////////////////////////////////////////////////////////

let groceryList = document.querySelector('#grocery-list');
let checkbox = document.querySelector('#hide');


checkbox.addEventListener('change', (e)=>{
    if(checkbox.checked ){
    groceryList.style.display = 'none';
    
    }else{
    groceryList.style.display = 'block';
    

    }
})