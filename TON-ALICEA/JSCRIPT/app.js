function callback(){
    console.log('I WILL RUN AFTER 2 SECIONDS');
}
setTimeout(function (){
    console.log('HELLO AFTER 2 SECONDS');
 
    setTimeout(function(){
        console.log('O WILL RUN AFTER INN CALLFBACK');

        setTimeout(function(){console.log('HAHAHAHA');}, 3000);
},2000);

}, 2000);