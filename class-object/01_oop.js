// object literal


const user = {
    username: "sumit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("get user details from db")

        return `get user details from db ${this.username}`
        // return this
    }
}
// user.getUserDetails()
// console.log(user.getUserDetails());

// constructor eg    
// new is constructor function 

// const promise  = new Promise();
// const date = new Date()

function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    this.greeting = function () {
        console.log("hello")
    }
    return this;
}

// const user1 =  User("sumit", 10, true); // if we not use new key word then it will overwrite the global object
//  new keyword is used to create object
//  new call constructor function
// this keyword is used to access the current object
const user1 = new User("sumit", 10, true);
const user2 = new User("shivani", 110, false);

console.log(user1)
console.log(user2)

// instance of