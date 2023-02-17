function Dog() {
	console.log(this);
}

new Dog(); // an instance of the Dog "class"

let obj = { Dog: Dog };

new obj.Dog(); // still an instance of the Dog "class"
