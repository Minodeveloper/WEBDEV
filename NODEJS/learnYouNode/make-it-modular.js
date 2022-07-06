

function callback(error, list){
    if(error){
        console.log(error);
    }
    else{
        for(let files of list){
            let nameArr = files.split('.');
            if(nameArr[1] === `${extension}`){
                console.log(files);
            }
        }
    }
}

