// class User{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     get age(){
//         return `${this._age}26`;
//     }
//     // set age(value){
//     //     this.age=value;
//     // }//Maximum call stack size exceeded
//     set age(value){
//         this._age=value;
//     }
// }

// const user1 = new User("John", 34);
// console.log(user1.age); //John

// old time code

function User(username, email) {
    this._username = username;
    this._email = email;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });
}


const user1 = new User("John", 'abc@gmail.com');
console.log(user1.email); //John


const person = {
    _email: 'abc@gmail.com',
    _password: '123456',

    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    },
    
}

 
const user3 = Object.create(person);

console.log(user3.email)