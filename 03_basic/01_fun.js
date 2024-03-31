// function eg
// Eririka Katagiri

function nameWriter() {
    console.log("s");
    console.log("u");
    console.log("m");
    console.log("i");
    console.log("t");
}

// nameWriter();

// fun to add two numbers

function add(a, b) {
    return a + b;
}

// console.log(add(2, 3));

// function greeting(username="Guest") {
function greeting(username) {
    // if (username === undefined) {
    if (!username) {
       console.log("please enter username");
        return
        
    }
    console.log("Good Morning " + username);
}

// greeting("john");
// greeting();

function calculator(val1,val2,...num1) {
    // return num1.reduce((a, b) => a + b);
    return num1;
}

// console.log(calculator(1, 2, 3, 4, 5));

const obj = {
    name: "Eririka",
    age: 23,
}


function handleObject(anyobject) {
    console.log(anyobject.name);
    console.log(anyobject.age);
}   

// handleObject(obj);
// handleObject({name: "john", age: 23});


const array = [1, 2, 3, 4, 5];
function ary(getArray){
    // return getArray.reduce((a, b) => a + b);
    return getArray;
}

// console.log(ary(array));
console.log(ary([1, 2, 3, 4, 50]));







