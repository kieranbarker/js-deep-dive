let abc = ["a", "b", "c"];

let keys = Object.keys(abc);
console.log(keys); // ["0", "1", "2"]

abc.length = 0;
console.log(abc); // []

let xyz = ["x", "y", "z"];

// This...
let x = xyz[0];

// Roughly translates to this...
x = xyz["0"];

// Or more accurately, something like this...
x = xyz[Object(0).toString()];

console.log(typeof x, x);
