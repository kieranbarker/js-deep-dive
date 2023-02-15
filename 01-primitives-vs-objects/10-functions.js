// Function declaration
function greet() {}

// Anonymous function expression
let sayHello = function () {};

// Named function expression
let sayBye = function bidFarewell() {};

// Arrow function expression
let welcomeBack = () => {};

for (let fn of [greet, sayHello, sayBye, welcomeBack]) {
	console.log(Object.getPrototypeOf(fn) === Function.prototype); // 4x true
}
