
// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// the reason is that an equality check == and comparision > < >= <= work differently.
// Comparision convert null to number, treating to as a 0.
// that's why null >= 0 is true and null > 0 is false.

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// avoid using of these types of comparision and equality check
// use clean code 


// ===
// check value and datatypes

