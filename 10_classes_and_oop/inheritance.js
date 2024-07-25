class user {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super (username)
        this.email = email;
        this.password = password;
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Chai", "chai@bd.com", "123")

chai.addCourses()
chai.logMe()

const masalaChai = new user("masalaChai")
masalaChai.logMe()

console.log(chai === masalaChai);
console.log(chai instanceof Teacher);