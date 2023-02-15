class Dog {
	bark() {
		console.log(this);
	}
}

new Dog().bark(); // an instance of the Dog class

class Pomeranian extends Dog {
	bark() {
		super.bark();
	}
}

new Pomeranian().bark(); // an instance of the Pomeranian class
