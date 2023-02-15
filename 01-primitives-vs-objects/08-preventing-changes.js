// Object.preventExtensions()

let dog = {
	name: "rex",
};

Object.preventExtensions(dog);

if (Object.isExtensible(dog)) {
	// this won't be executed
	dog.bark = function () {
		return "woof";
	};
}

// Object.seal()

Object.seal(dog);

if (!Object.isSealed(dog)) {
	// this won't be executed
	delete dog.name;
}

// Object.freeze()

Object.freeze(dog);

if (!Object.isFrozen(dog)) {
	// this won't be executed
	dog.name = "spot";
}

// Bonus: enumerated types

const sizes = Object.freeze({
	SMALL: "S",
	MEDIUM: "M",
	LARGE: "L",
});
