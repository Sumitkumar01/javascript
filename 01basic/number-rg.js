// number in javascript
let num = 100;
// console.log(num);// 10

let hexNum = 0xff;
// console.log(hexNum);// 255   

// console.log(num.toFixed(1));// 10.0

// console.log(num.toString(2));// 1010

// console.log(num.toPrecision(4));// 1e+1

const a = 100000;

// console.log(a.toLocaleString("en-IN"));// 1,00,000


// console.log(a.toLocaleString("en-IN", { style: "currency", currency: "INR" }))

// ****************** math object ********************

// console.log(Math.abs(-10));// 10 it is use for absolute value & change the sign - to +

// console.log(Math.floor(10.8));// 10 always round down lower value

// console.log(Math.ceil(10.2));// 11 always round up upper value

// console.log(Math.round(10.5));// 11 always round up upper value

// console.log(Math.pow(2, 3));// 8

// console.log(Math.sqrt(16));// 4

// console.log(Math.min(10, 20, 30, 40, 50));// 10

// console.log(Math.max(10, 20, 30, 40, 50));// 50

// console.log(Math.random());// 0.123456789

// console.log(Math.random() * 100);// 23.015850398132861

// console.log(Math.floor(Math.random() * 100));// 0-99

// console.log(Math.floor(Math.random() * 10) + 1);// 1-10

// console.log(Math.floor(Math.random() * 50) + 65);// 65-114

const min = 10;
const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);// 10-20

// ****************** number object ********************

// console.log(Number.isInteger(10));// true

// console.log(Number.isInteger(10.5));// false

// console.log(Number.isNaN(10));// false

// console.log(Number.isNaN("10"));// false