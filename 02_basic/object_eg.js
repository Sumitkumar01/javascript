//  object eg

//  object literal and this not signal ton the object

// const sym = Symbol("key");
// let person = {
//   [sym]: "key",
//   name: "John",
//   age: 30,
//   gender: "male",
//   isMarried: true,
//   "family name": ["Jane", "Emily", "Michael"],
// };

// console.log(person.name); // Output: John
// console.log(person['family name']); // Output: John another way to access the property & it's good practice
// console.log(typeof person.sym);// data type now is string
// console.log( person[sym]);
// different way to create object


// let person1 = new Person('John', 30, 'male', true);
// console.log(person1.name); // Output: John
// Object.freeze(person);
// person.name = "Jane"; // will not work
// console.log(person.name); // Output: John

// function in object

// person.greet = function () {
//   console.log(`Hello! ${this.name}`);
// };

// person.greet(); // Output: Hello!
// console.log(person.greet());
