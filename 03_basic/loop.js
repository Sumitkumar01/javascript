//  loop example

// for(let i = 0; i < 10; i++){
//     console.log(i);
// do something with i
// }
//  while loop example

// let i = 0;
// while(i <= 10){
//     console.log(i);
//     i++;
// do something with i
// }
//  do while loop example

// let i = 0;
// do{
//     console.log(i);
//     i
// }   while(i < 10);

// const arr = [1, 2, 3, 4, 5]

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     // do something with arr[i]
// }

//  for of loop eg

// const arr = [1, 2, 3, 4, 5];

// for(let i of arr){
//     console.log(`no ${i}`);
//     // do something with i
// }

// const map = new Map();
// map.set("name", "john");
// map.set("age", 30);

// // console.log(map);

// for (let [key, value] of map) {
//     console.log(`${key} : ${value}`);
// }

const myObject = {
    us: "united states",
    uk: "united kingdom",
    fr: "france",
    inr: "india",
    jpn: "japan",
};

// for(let key in myObject) {
//     // console.log(key);// output : us uk fr inr jpn
//     // console.log(myObject[key]); // object value will be printed
//     console.log(`${key} : ${myObject[key]}`);
// }

const languages = ["us", "uk", "fr", "inr", "jpn"];

// languages.forEach(function (lang) {
//   console.log(lang.toUpperCase());
//   // console.log(myObject[lang]);
// });

languages.forEach((lang, index, array) => {
    //   console.log(`${index} : ${lang.toUpperCase()}`); // output 0:US
    //   console.log(array);
    //   console.log(lang);
});

// ES6 syntax

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.filter((number) => number > 3);
// console.log(newNumbers); // [4, 5]

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.map((number) => number * 2);
// console.log(newNum);// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// const newNum = myNum.map((number) => number * 10).map((num) => num + 5).filter((number) => number > 50);

// console.log(newNum); // [55, 65, 75, 85, 95, 105 ]

const array = [1, 2, 3];

// const newArray = array.reduce((accumulator, currentValue) => {
//     console.log(accumulator, "acc");
//     console.log(currentValue, "curr");
//     return accumulator + currentValue;
// });

// console.log(newArray); // 55

const shoopingCart = [
    { name: "Bike", price: 100, quantity: 1 },
    { name: "TV", price: 200, quantity: 3 },
    { name: "Album", price: 10, quantity: 5 },
    { name: "Book", price: 5, quantity: 8 },
];

// const total = shoopingCart.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue.price;
// },0);
// console.log(total); // 600

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

const totalLength = names.reduce((accumulator, currentValue) => {
    console.log(accumulator, "acc");
    console.log(currentValue.length, "curr");
    return accumulator + currentValue.length;
}, 0);

console.log(totalLength); // 23
