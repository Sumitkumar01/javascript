function multiple(num) {
    this.num = num;
    console.log(this.num)
    return num * 5;
}

const result = multiple(5);
console.log(result)

multiple.power = 2;
console.log(multiple.power);
console.log(multiple.prototype);


function createUser(name, age) {
    this.name = name;
    this.age = age;
}

createUser.prototype.about = function () {
    this.age++;
    // return `${this.name} is ${this.age} years old`;
}

createUser.prototype.printMe = function () {
    console.log(`age is ${this.age}`)
}

const user = new createUser('Rakib', 25);
// console.log(user);

user.about();
user.printMe();

//  function is also an object in JS