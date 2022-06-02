//object oriented

function objCreater(names, works)
{
    console.log(this)
    this.name = names;
    this.work = works;
    console.log('invoked!')
}
objCreater.prototype.laugh = 'hahahah';

let hoho = new objCreater('santa', 'hitler');

console.log(hoho);