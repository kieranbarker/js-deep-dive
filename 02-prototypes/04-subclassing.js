// more modern version of the following:
// https://www.taniarascia.com/understanding-prototypes-and-inheritance-in-javascript/

function Hero(name, level) {
	this.name = name;
	this.level = level;
}

function Warrior(name, level, weapon) {
	let hero = Reflect.construct(Hero, [name, level], Warrior);
	hero.weapon = weapon;
	return hero;
}

Object.setPrototypeOf(Warrior, Hero);
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
