function getThis() {
	console.log(this);
}

getThis(); // the global object (or undefined)

let obj = { getThis };

obj.getThis(); // obj
