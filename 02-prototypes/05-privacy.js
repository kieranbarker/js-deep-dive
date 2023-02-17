let Person = (function () {
	"use strict";

	let privates = new WeakMap();

	function Person(first, last) {
		privates.set(this, { first, last });
	}

	Person.prototype.getName = function () {
		let { first, last } = privates.get(this);
		return `${first} ${last}`;
	};

	return Person;
})();

let person = new Person("haami", "nyangibo");
console.log(person.first, person.last);

let fullName = person.getName();
console.log(fullName);
