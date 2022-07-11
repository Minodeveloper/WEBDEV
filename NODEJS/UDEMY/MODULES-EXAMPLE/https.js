const printDancer = require('./response')
const printType = require('./request')




function dance(name, type){

    printDancer.printDancer(name);

    printType.printType(type);

}

dance('mino', 'salsa');