//closures

function greet(message)
{
    return function(name){
        console.log(`hello ${name} ${message}`);
    }
}

greet('kaise ho')('madhuresh');