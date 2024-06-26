


function sayMyName () {
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("V");
    console.log("A");
    console.log("L");
}

// sayMyName  //for a reference
// sayMyName()  //for execution

// function addTwoNums (Num1, Num2){     //(Num1, Num2)  called as a parameters
//     console.log(Num1 + Num2);
// }


function addTwoNums (Num1, Num2){     //(Num1, Num2)  called as a parameters
    let result = Num1 + Num2;
    return result;
    console.log("Dhaval");  // This is not print because there is a rule that after return we'can't print or execute in function
}

// when we return a function we can store a function in a variables  without retuen we can't do that

addTwoNums(3,5)          //(3,5)  called as an arguments

const result = addTwoNums(3,5);

// console.log("Result :", result);    //in this result is an undefined



function loginUserMessage (username){
    // if( username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if( !username){                                   //Both are same
        // console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage());         // In these case the value is undefined not a null


