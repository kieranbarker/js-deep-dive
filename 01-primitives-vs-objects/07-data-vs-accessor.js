// Data descriptors

let dog = {};

Object.defineProperty(dog, "name", {
	value: "rex",
	writable: false,
});

dog.name = "spot"; // throws an error in strict mode, otherwise fails silently

// Accessor descriptors

let coach = {
	firstName: "andy",
	lastName: "bolton",
};

Object.defineProperty(coach, "fullName", {
	get: function () {
		return `${this.firstName} ${this.lastName}`;
	},
	set: function (value) {
		[this.firstName, this.lastName] = value.split(" ");
	},
});

console.log(coach.fullName);

coach.fullName = "imran bashir";
console.log(coach.firstName, coach.lastName);

// Can also be written like this...
coach = {
	firstName: "andy",
	lastName: "bolton",
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
	set fullName(value) {
		[this.firstName, this.lastName] = value.split(" ");
	},
};
