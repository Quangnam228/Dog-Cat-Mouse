var Dog = require('./Dog');
var cats = require('./Cat')

var dog = new Dog('Tom');
var cat = new Cat();
dog.eat(cat);
console.log(dog);