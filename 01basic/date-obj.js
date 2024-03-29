// date object

// create a date object
var date = new Date();
// console.log(date);/// Fri May 01 2020 12:00:00 GMT+0530 (India Standard Time)
// get the current date
// console.log(date.toString())// Fri May 01 2020 12:00:00 GMT+0530 (India Standard Time)
// console.log(date.toDateString());// Fri May 01 2020
// console.log(date.toTimeString());// 12:00:00 GMT+0530 (India Standard Time)
// console.log(date.toLocaleDateString());// 5/1/2020
// console.log(date.toLocaleTimeString());// 12:00:00 PM
// console.log(date.toLocaleString());// 5/1/2020, 12:00:00 PM
let myTimeStamp = Date.now();// get the current time
// console.log(Math.floor(myTimeStamp/1000));
// console.log(date.getTime()/1000);// get the current time
console.log(date.toLocaleString("en-US", { weekday:'long' }));// 5/1/2020, 12:00:00 PM
var currentDate = date.getDate();

// console.log(currentDate);// 1
// get the current month
var currentMonth = date.getMonth() + 1; // getMonth() returns 0-indexed month, so we need to add 1
// console.log(currentMonth);// 5