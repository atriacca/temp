function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
    this.speak = function() {
        console.log("Meow! My name is " + this.name")
    }
}

var cat1 = new Cat("Fluffykins", "Tabby");
var cat2 = new Cat("Mr. Whiskers", "Munchkin");
console.log(cat1.speak === cat2.speak);  // false, because they occupy different positions in memory

// They still show up as identical though
console.log("" + cat1.speak);  // function () { console.log("Meow! My name is " + this.name) }
console.log("" + cat2.speak);  // function () { console.log("Meow! My name is " + this.name) }

  function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

Cat.prototype.speak = function () {
    console.log("Meow! My name is " + this.name);
};

var cat1 = new Cat("Fluffykins", "Tabby");
var cat2 = new Cat("Mr. Whiskers", "Munchkin");
console.log(cat1.speak === cat2.speak);  // true!

cat1.speak();  // Meow! My name is Fluffykins
cat2.speak();  // Meow! My name is Mr. Whiskers

// We can see that the prototype is a simple object now with just one method: speak
console.log(Cat.prototype);  // { speak: [Function] }