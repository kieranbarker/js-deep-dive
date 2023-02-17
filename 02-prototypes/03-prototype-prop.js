function Dog(name) {
	this.name = name;
}

Dog.prototype.species = "dog";

Dog.prototype.bark = function () {
	return "woof";
};

let dog = new Dog("rex");

let greeting = dog.bark();
console.log(greeting);
