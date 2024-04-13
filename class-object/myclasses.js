// https://xhamster.desi/videos/puremature-sensual-big-tit-milf-massage-fuck-with-davina-davis-xhLAjuC?t=0.1
//  ES6
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
    // encryptPassword() {
//         return `${this.name} this is the age`
//     }
// }

// const person1 = new Person('John', 25);
// console.log(person1.encryptPassword()); // Output: "John this is the age"


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.encryptPassword = function() {
    return `${this.name.toUpperCase()} is age ${this.age}`;
}

const person1 = new Person('John', 25);
console.log(person1.encryptPassword()); // Output: "John this is the age"