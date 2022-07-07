let formAdd = document.getElementById('add-item');

formAdd.addEventListener('submit', (e)=>{
    e.preventDefault();

    let text = formAdd.querySelector('input[type="text"]').value;
    formAdd.querySelector('input[type="text"]').value= null

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


// SEARCH ITEMS/////////////


const SEARCH = document.forms['search-item'].querySelector('input');

SEARCH.addEventListener('keyup', (e)=>{
    //grab user text
    let text = e.target.value.toLowerCase();
    

    let groceryList = document.querySelector('#grocery-list ul');

    let groceries = groceryList.getElementsByTagName('li');

    let  groceriesArray = Array.from(groceries);

    // lopp through groery item

    groceriesArray.forEach((grocery)=>{
        let groceryName = grocery.firstElementChild.textContent;
        let groceryNameLower = groceryName.toLowerCase();

        // text find in grocery name
        if (groceryNameLower.indexOf(text)== -1){
            grocery.style.display = 'none'
        }else{
            grocery.style.display = 'block'
        }
    })
})