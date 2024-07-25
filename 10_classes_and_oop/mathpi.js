const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 4
// console.log(Math.PI);

const chai = {
    name : "Ginger Chai",
    price : 250,
    isAvailable : true
}

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name', {
    writable : false,
    enumerable : false,
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
