const score = "33abc";

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(typeof valueInNumber);

// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0;

let isloggedIn = "abc";

let booleanIsLoggedIn = Boolean(isloggedIn);

// console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "abc" => true

let someNumber = 33;

// let stringNum = String(someNumber);

// console.log(stringNum);
// console.log(typeof stringNum);

// *************************************Operations***************************************************

let value = 3
let negValue = -value

// console.log(negValue);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(1 + "2" + 2);
// console.log(1 + 2 + "2" + 2);

// console.log(+true);
// console.log(+"");

let gameCounter = 100;
gameCounter++;

// console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);