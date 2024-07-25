class user{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
    static createID(){
        return `123`
    }
}

const dhaval = new user("dhaval")
// console.log(dhaval.createID());


class Teacher extends user {
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iPhone", "ipfnd@apple.com")
console.log(iPhone.logMe());
console.log(iPhone.createID());
