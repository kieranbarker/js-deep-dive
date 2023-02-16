// Data descriptors

let dog = {};

Object.defineProperty(dog, "name", {
	value: "rex",
	writable: false,
});

dog.name = "spot"; // throws an error in strict mode, otherwise fails silently

// Accessor descriptors

let coach = {
	name: {
		first: "andy",
		last: "bolton",
	},
};

Object.defineProperty(coach.name, "full", {
	get: function () {
		return `${this.first} ${this.last}`;
	},
	set: function (value) {
		[this.first, this.last] = value.split(" ");
	},
});

console.log(coach.name.full);

coach.name.full = "imran bashir";
console.log(coach.name.first, coach.name.last);

// Can also be written like this...
coach.name = {
	first: "andy",
	last: "bolton",
	get full() {
		return `${this.first} ${this.last}`;
	},
	set full(value) {
		[this.first, this.last] = value.split(" ");
	},
};
