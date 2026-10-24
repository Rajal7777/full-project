function Player(name, marker) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const player = new Player("Rajal", "Suwal");

console.log(player.sayName());

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`HEllO, I'm ${this.name}`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  console.log(`My maker is "${this.marker}`);
};

//making Player obj inherit from person
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype);

const player1 = new Player("Ramu", "A");
const player2 = new Player("Rohan", "B");

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();

let x = new Object();

console.log(Object.getPrototypeOf(x));
console.log(x.toString());
