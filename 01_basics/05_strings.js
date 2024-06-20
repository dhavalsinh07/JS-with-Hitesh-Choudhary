const name = "Dhaval";
const repoCount = 50;

// console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name+"sinh"} and my repo count is ${repoCount}`);


// by using this it gives a key-value pair and length of string in console and show all methods
const gameName = new String('Call of duty');

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));

// console.log(gameName.indexOf("d"));

let newString = gameName.substring(0,6);
// console.log(newString);

const anotherNewString = gameName.slice(10, -5);
// console.log(anotherNewString);

const newStringOne = "    dskdksn     "
// console.log(newStringOne.trim());

const url = "https://dhavalsinh.com/dhavalsinh%20solanki"
console.log(url.replace("%20", "-"));

console.log(url.includes('dhaval'));

