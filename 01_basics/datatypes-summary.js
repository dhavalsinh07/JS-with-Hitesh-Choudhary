// mainly two types of data types 
// 1)premitive and 2)non-premitive datatypes or reference type

// premitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggeedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 4545454548465645n;

// typeof Null = object


// Refernce type or Non premitive

// Arrays, Objects, Functions

const heros = ["shaktiman", "thor", "spiderman", "batman"]

// let myObj = {
//     name: Dhavalsinh,
//     age: 21,
// }

const myFunction = function() {
    // console.log("Hello World");
}

// all non-premitive type = object

// and use ACMA script 
// Q) JS is a statically typed or dynamically typed language?
// Ans. JavaScript is a dynamically typed language, which means that data types of variables are determined by
//      the value they hold at runtime and can change throughout the program as we assign different values to them.
//    While typescript is statically typed language


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Premitive) , Heap(Non-Premitive)

let myYoutubeName = "dhavalsinhsolankicom"

let anotherName = myYoutubeName;
anotherName = "chaiorcode";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "ncsjn@google.com"

console.log(userOne.email);
console.log(userTwo.email);
