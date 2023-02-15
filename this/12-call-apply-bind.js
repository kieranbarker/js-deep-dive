let dog = {
	name: "rex",
	bark() {
		return `woof, i'm ${this.name}`;
	},
};

let greeting = dog.bark();
console.log(greeting); // "woof, i'm rex"

let unboundBark = dog.bark;
greeting = unboundBark();
console.log(greeting); // "woof, i'm undefined"

greeting = unboundBark.call({ name: "spot" });
console.log(greeting); // "woof, i'm spot"

greeting = unboundBark.apply({ name: "spot" });
console.log(greeting); // "woof, i'm spot"

let boundBark = unboundBark.bind({ name: "spot" });
dog.bark = boundBark;
greeting = dog.bark();
console.log(greeting); // "woof, i'm spot"
