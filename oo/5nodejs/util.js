var inherits = require('util').inherits;

function Animal(name){
    this.name = name;
}

Animal.prototype.walk = function(destination){
    console.log(this.name, "walk to", destination);
};

function Bird(name){
    // Call parent constructor
    Animal.call(this, name);

    // Additional construction code
}

inherits(Bird, Animal);

Bird.prototype.fly = function (destination) {
    console.log(this.name, "is flying to", destination);
};

var bird = new Bird('sparrow');
bird.walk('sydney');
bird.fly('melbourne');