let sortedArr = [];

for(let i = 1; i < 101; i++){
    sortedArr.push(i);
}

function linerSearch(array, number) {
    let found = 0;
    for (let i  = 0; i < array.length ; i++){
        if(array[i] === number){
            console.log(`Found ${number} at ${i} index `);
            found = 1;
        }
    }
    if(found === 0) {
        console.log('NOT FOUND');
    }
    
}

linerSearch(sortedArr, 31);

// function binarySearch(array, number){

//     let lowIndex = 0;
//     let highIndex = array.length - 1;

//     let midIndex = Math.floor(lowIndex + highIndex / 2);

//     let guess = array[midIndex];

//     while(lowIndex <= highIndex){
//             if(number > guess){
//                 lowIndex = midIndex+1;
//             }
//             if(guess > number){
//                 highIndex = midIndex - 1;
//             }

    
//     }

    
// }

