let dog = {
	name: "rex",
	bark: function () {
		return "woof";
	},
};

let descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
