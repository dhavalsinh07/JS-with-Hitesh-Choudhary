// ES6

class User {
    constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('Chai', 'chai@google.com', '123')

console.log(chai.encryptPassword());
console.log(chai.changeUserName());


// Behind the scene

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const Tea = new user('Tea', 'tea@google.com', '546')

console.log(Tea.encryptPassword());
console.log(Tea.changeUserName());