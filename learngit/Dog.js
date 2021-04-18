var chalk = requires('chalk');
function Dog(name) {
    this.stomach =[];
    this.name = name
}

Dog.prototype.eat = function(Cat){
    this.stomach.push(cat);
};

Dog.prototype.SayHi = function(){
    console.log("Hi! I am a dog,My name is" +chalk.blue(this.name));
}

module.exports = Dog;