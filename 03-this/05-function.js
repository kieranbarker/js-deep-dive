function getThis() {
	console.log(this);
}

getThis(); // the global object (or undefined)

let obj = { getThis: getThis };

obj.getThis(); // obj
