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

// *********************part 2*******************************

//  constructor function

// const user = new Object;

const user = {};
user.name = "John";
user.age = 30;
user.isMarried = true;

//  constructor function

//  nesting object

// const user2 = {
//   email: "john@gmail.com",
//   fullName: {
//     userfullName: {
//       firstName: "John",
//       lastName: "Doe",
//     },
//   },
// };

// console.log(user2.fullName.userfullName);

//  object method

// object concatination

const user3 = {
  name: "John",
  age: 30,
};

const user4 = {
  email: "john@gmail.com",
  fullName: {
    userfullName: {
      firstName: "John",
      lastName: "Doe",
    },
  },
};

const user5 = Object.assign({}, user3, user4);

// console.log(user5);
console.log(Object.keys(user5));// it will return all the keys of the object
console.log(Object.values(user5));// it will return all the values of the object
console.log(Object.entries(user5));// it will return all the key value pair of the object
console.log(user5,hasOwnProperty("name"));// it will return true or false