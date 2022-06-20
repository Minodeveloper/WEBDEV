let car = {
    init: function (color) {
        this.color = color;
        
    }
}
car.init('red');
console.log(car);

let bugati = Object.create(car);
bugati.init('pink')
console.log(bugati);