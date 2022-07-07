let keyDIV = document.querySelector('.keyboard-inputs');

window.addEventListener('keypress',(event)=>{

    let soundObj = {
        "A":"clap",
        "S":"hihat",
        "D":"kick",
        "F":"openhat",
        "G":"boom",
        "H":"ride",
        "J":"snare",
        "K":"tom",
        "L":"tink"
    }
    try {
        let keys = document.querySelector(`#${event.key.toUpperCase()}`);
        let sounds = document.querySelector(`#${soundObj[event.key.toUpperCase()]}`)
       sounds.play();
        
        if(keys !== null){
        keys.classList.toggle('playing') ;
        

        // console.log(keys);
        }
        
    } catch (error) {
        
    }
    
 


})

