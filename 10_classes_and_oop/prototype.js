// let myName = "Dhaval    ";

// console.log(myName.length);
// console.log(myName.truelength);



let myHeros = ['Thor', 'Spiderman']

let heroPower = {
    thor : 'Hammer',
    spiderman : 'sling',

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    // console.log(`hitesh is present in all objects`);
}


Array.prototype.heyhitesh = function(){
    // console.log(`Hitesh says hello`);
}
// heroPower.hitesh()

myHeros.hitesh()
myHeros.heyhitesh()
// heroPower.heyhitesh()


// Inheritance

const user = {
    name : 'chai',
    email : 'chai@google.com'
}
const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fulltime : true,
    __proto__ : teachingSupport
}

teacher.__proto__ = user

// Modern syntax
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUserName = 'chaiAurCode        '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lenght is ${this.trim().length}`);
}

anotherUserName.trueLength()
"Dhaval".trueLength()
"IceTea ".trueLength()