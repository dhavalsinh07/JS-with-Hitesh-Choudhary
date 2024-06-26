// let a = 10;
// const b = 20;
// var c = 30;


{}                     //scope 

// if(true) {
//     let a = 10;
//     const b = 20;
//     // var c = 30;        // var have not a block scope
//     // d = 40;            // have not a block scope
// }

// console.log(a);
// console.log(b);
// console.log(c);



let a = 300;
// console.log(a);              // in this a have a global scope

if (true) {
    let a = 30;
    const b = 50;
    // console.log("INNER a = ", a);       // in this a have a block scope
}



function one () {
    const username = "Dhavalsinh"

    function two () {
        const website = "youtube"
        // console.log(username);              // it's an example of nested function // in these child can access the parent 
    }
    // console.log(website);              // we can't access website outside the function because of block scope

    two()          //if i comment this then username not execute so nothing will be print
}
one();


if (true){
    const username = "Dhavalsinh"

    if (true){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);        //can't access
}
// console.log(username);     // can't access





// ++++++++++++++++++++++++  interesting +++++++++++++++++


console.log(addOne(5));

function addOne (num) {
    return num + 1;                                  // it's a function
}
// addOne(5)
  // We can access the function before initialization in these types




console.log(addTwo(5));           // can't access before intialization

const addTwo = function(num) {
    return num + 2;                                //It's a function but called as an Expression // powerful
}
// addTwo(5)

// but we can't access the function in these before initialization

//// it's called as a ////hoisting //////
