class Cars {
    constructor(model, color, speed){
        this.model = model;
        this.color = color;
        this.topSpeed = speed;
        // this.data = function(){
        //     console.log(`This is ${this.model} color ${this.color} and top speed of ${this.topSpeed}kmph.`);}
    }
        data(){
                console.log(`This is ${this.model} color ${this.color} and top speed of ${this.topSpeed}kmph.`);
                return this
        }

        beta(){
            console.log('CHAINING!');
        }
        
    
}

let car1 = new Cars('honda', 'red',234);
// console.log(car1.__proto__);
car1.data().beta();