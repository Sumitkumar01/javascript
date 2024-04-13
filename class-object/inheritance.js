class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    displayName(){
        console.log(this.name);
    }
}

class Admin extends User{
    constructor(name, email, role){
        super(name, email);
        this.role = role;
    }
    getAdminInfo(){
        console.log(`name is ${this.name} and email ${this.email} and role ${this.role}`);
    }
}

const userOne = new User('John Doe', 'john@gmail.com');
const userTwo = new Admin('Jane Doe', 'jane@gmail.com', 'admin');
const userThree = new User('Mike Doe', 'mike@gmail.com');
userOne.displayName();
userTwo.getAdminInfo();

// console.log(User, instancesof, Admin);
console.log(userOne instanceof User)
console.log(userTwo instanceof User)
console.log(userTwo instanceof Admin)