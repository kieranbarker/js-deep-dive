function forEach(arr, callback, thisArg) {
	for (let i = 0; i < arr.length; i++) {
		callback.call(thisArg, arr[i], i, arr);
	}
}

let arr = ["a", "b", "c"];

function logThis() {
	console.log(this);
}

forEach(arr, logThis); // 3x global (or 3x undefined)

forEach(arr, logThis, arr); // 3x arr
