//  array-eg.js
// in array we can store multiple values
// we can access the values by index
// in array copy operation create a shallow copy which means it will copy the reference of the original array and if we change the value of the copied array it will also change the original array
const arr = [10, 20, 30, 40, 50, "hello", true, false, null, undefined];

// console.log(arr[5]);

// const arr2 = new Array(1,2,3,4,5,6,7,8,9,10);// another way to create an array

// console.log(arr2);
// console.log(arr.length);// to get the length of the array
// console.log(arr.push(60)); // to add the value at the end of the array
// console.log(arr.pop()); // to remove the value at the end of the array
// console.log(arr.unshift(60)); // to add the value at the beginning of the array
// console.log(arr.shift()); // to remove the value at the beginning of the array
// console.log(arr.splice(2, 3)); // to remove the value at the index 2 and remove 3 values after that
// console.log(arr.splice(2, 3, 100, 200)); // to remove the value at the index 2 and add 100 and 200 after that
// console.log(arr.slice(2, 4)); // to get the values from index 2 to index 4
// console.log(arr.slice(2)); // to get the values from index 2 to the end of the array
// console.log(arr.slice()); // to get the whole array
// console.log(arr.concat([100, 200, 300])); // to concat the array with the given array
// console.log(arr.concat([100, 200, 300], [400, 500, 600])); // to concat the array with the given array
// console.log(arr.concat(100, 200, 300)); // to concat the array with the given array
// console.log(arr.includes(30)); // to check if the array includes the given value
// console.log(arr.indexOf(30));// to get the index of the given value
// console.log(arr.join());// to join the array into a string
// console.log(arr.join("-"));// to join the array into a string with the given separator

// part 2

// const heroList_1 = ["Iron Man", "Thor", "Hulk", "Captain America", "Black Widow", "Spider-Man"];
// const heroList_2 = ["Black Panther", "Doctor Strange", "Ant-Man", "Scarlet Witch", "Vision", "Wasp"];

// console.log(heroList_1.concat(heroList_2));// to concat the array with the given array
// console.log([...heroList_1,...heroList_2]);// to concat the array with the given array using spread operator

const mynewArr = [1, 2, 3, [1, 4, 5], [1, 2, 3, [1, 4, 5]]];

// console.log(mynewArr.flat(Infinity));// to flatten the array
// console.log(Array.from({name:'myname'}));// to create an array from the given object it's return an empty array
// console.log(Array.from("myname"));// to create an array from the given string

let num1 = 123;
let num2 = 456;
let num3 = 789;
console.log(Array.of(num1, num2, num3));
