console.log('Hello, world!');

const accountId = 123456789012;
let accountEmail ='test@example.com';
var accountPassword = 'password123';
accountCity = 'New York';

let accountState

// console.table([accountEmail, accountPassword, accountCity, accountState])

// primitives

// 7 types of data types string, number, boolean, null, undefined, symbol, bigint

// 1. string

let firstName = 'John';
let lastName = "Doe";
let fullName = firstName + ' ' + lastName;

console.log(fullName)

// 2. number

let age = 30;
let height = 175.5;

// 3. boolean

// let isLoggedIn:Boolean = true; // typescript
// let isApproved = false;//javaScript

// 4. null

let user = null;

// 5. undefined

let score;

// 6. symbol

let symbol1 = Symbol('id');
let symbol2 = Symbol('id');

console.log(symbol1 === symbol2)

// 7. bigint

let bigInt = 1234567890123456789012345678901234567890n;

// reference types (objects, arrays, functions)(non-primitive)


// 8. object

let person = {
    firstName: 'John',
}

let person2 = new Object({
    firstName: 'John',

})

// 9. array

let colors = ['red', 'green', 'blue'];
let numbers = new Array(1,2,3);

// 10. function

let sayHello = function(){
    console.log('Hello');

}

let sayHello2 = () => {
    console.log('Hello');
}

// 11. date

let date = new Date();

// 12. regex

let regex = /\w+/;

// 13. template literals

let name = 'John';
let age = 30;

let message = `My name is ${name} and I am ${age} years old`;

console.log(message);

// 14. destructuring

let person3 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'New York'

}

let {firstName, lastName, age, city} = person3;

console.log(firstName, lastName, age, city);

// 15. spread operator

let colors2 = ['red', 'green', 'blue'];
let colors3 = ['yellow', ...colors2];

console.log(colors3);

// 16. arrow function

let add = (a, b) => {
    return a + b;

}

let add2 = (a, b) => a + b;

// 17. class

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    sayHello(){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
}