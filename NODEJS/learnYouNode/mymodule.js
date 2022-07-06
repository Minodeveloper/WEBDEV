const fs = import('fs');



function directoryNamePrinter(directoryName, extension, callback){
         
    fs.readdir(directoryName, callback);

}




module.exports = directoryNamePrinter