"use strict";

let timer = {
	ms: 5000,
	tick: function () {
		let interval = setInterval(function () {
			console.log(this.ms);
			if (this.ms > 0) {
				this.ms -= 1000;
			} else {
				clearInterval(interval);
			}
		}, 1000);
	},
};

timer.tick(); // doesn't work

timer.tick = function () {
	let interval = setInterval(() => {
		console.log(this.ms);
		if (this.ms > 0) {
			this.ms -= 1000;
		} else {
			clearInterval(interval);
		}
	}, 1000);
};

timer.tick(); // works!
