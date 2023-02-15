class Dog {
	constructor() {
		console.log(this);
	}
}

new Dog(); // an instance of the Dog class

class Pomeranian extends Dog {
	constructor() {
		super(); // binds `this` (can't use `this` before this point)
	}
}

new Pomeranian(); // an instance of the Pomeranian class
