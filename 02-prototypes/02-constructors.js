function Dog(name) {
	this.name = name;
}

let dog = new Dog("rex");

let proto = Object.getPrototypeOf(dog);
console.log(proto); // what do you think?
