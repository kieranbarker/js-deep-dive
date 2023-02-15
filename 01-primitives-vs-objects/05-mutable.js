let dog = {
	name: "rex",
	bark: function () {
		return "woof";
	},
};

let dog2 = dog;
dog2.name = "spot"; // unintended side effect?
