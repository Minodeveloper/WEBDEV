let url = "https://jsonplaceholder.typicode.com/todos/1";



fetch(url)
.then((response)=>{

    return response.json()

})
.then((data)=>{
    console.log(data);
})

