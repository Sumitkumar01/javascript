// eg on prototype 

let name = "sumit   "
// console.log(name.length);




// console.log(name.truelength);

let myHeros = ["thor", "spiderman", "hulk", "ironman"];
let heroPower = {
    thor: "god of thunder",
    spiderman: "can climb walls",
    hulk: "smash",
    // ironman: "money"
    getIronmanPower: function () {
        console.log(`ironman pawer is ${this.ironman}`)
    }
}

// Object.prototype.sumit = function () {
//     console.log("this is sumit");
// }

Array.prototype.sumit = function () {
    console.log("this is sumit array");
}
// heroPower.sumit();
// myHeros.sumit();


// inheritance in js

const Person = {
    name: "sumit",
    isAdmin: true,
}

const Teacher = {
    makeVide: true,
}

const TeacherSupport = {
    isAvailable: false,
}

const TASupport = {
    makeNotes: 'Js',
    fullTime: true,
    __proto__: TeacherSupport
}

Teacher.__proto__ = Person;

Object.setPrototypeOf(TeacherSupport, Teacher);

// console.log(Teacher);

let userName = "sumitk";
String.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log(`true length is : ${this.trim().length}`)
}

userName.trueLength();
name.trueLength();

"shivani".trueLength();