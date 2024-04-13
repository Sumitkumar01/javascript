class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`User name: ${this.username}`);
    }
    static createId(){
        return `123`;
    }
}

const user = new User('John');
user.logMe();
// console.log(user.createId());

class Teacher extends User {
    constructor(username, subject){
        super(username);
        this.subject = subject;
    }
    logMe(){
        console.log(`Teacher name: ${this.username}`);
    }
}

const teacher = new Teacher('John', 'Math');
teacher.logMe();
console.log(teacher.createId());