const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

// { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }

// console.log(Math.PI);

const myNewObject = {
    name: "ginger tea",
    price: 100,
    isAvailable: true,

    orderTea: function () {
        console.log("ordering tea...");
    },
};

Object.defineProperty(myNewObject, "price", {
    writable: false,
});

// console.log(Object.getOwnPropertyDescriptor(myNewObject, 'price'))

Object.defineProperty(myNewObject, "name", {
    writable: false,
    enumerable: false,
    configurable: false,
});

// console.log(Object.getOwnPropertyDescriptor(myNewObject, 'name'))

// myNewObject.name = 'black tea'

// console.log(myNewObject.name)

// for(let [key, value] of myNewObject){
//     console.log(key, value)
// }// output: myObject is not iterable

for (let [key, value] of Object.entries(myNewObject)) {
    if (typeof value !== "function") {
        console.log(key, value);
    }

}
