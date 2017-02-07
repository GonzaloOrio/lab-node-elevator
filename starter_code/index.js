/*jshint esversion:6 */
const Elevator = require("./elevator.js");
const Person = require("./person.js");

let firstElevator = new Elevator();
let persons = [
  new Person("paul", 3, 6),
  new Person("james", 1, 8),
  new Person("peter", 9, 5),
  new Person("mary", 4, 1),
  new Person("evelyn", 2, 10),
  // new Person("david", 6, 0),
  // new Person("henry", 5, 9),
  // new Person("julia", 8, 3),
  // new Person("hillary", 10, 4),
  // new Person("jessica", 0, 7)
];

persons.forEach((person) =>{
  firstElevator.call(person);
});

firstElevator.start();
