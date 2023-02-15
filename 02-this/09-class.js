class Dog {
	static {
		console.log(this); // the Dog class itself
	}

	bark() {
		console.log(this); // an instance of the Dog class
	}
}

new Dog().bark();
