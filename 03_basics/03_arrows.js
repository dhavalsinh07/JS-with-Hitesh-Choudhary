const user = {
    username: "Dhavalsinh",
    price: 999,

    welcomeMsg: function () {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMsg()                       // this refer current context
// user.username = "Solanki"
// user.welcomeMsg()

// console.log(this);                       // result = {}


// function chai () {
//     let username = "Dhavalsinh"
//     console.log(this.username);
// }

// chai()


const chai = () => {
    let username = "Dhavalsinh";
    console.log(username);                          //  print username 
    console.log(this.username);                     // print undefined
}

chai()


// when we use () => {}                    // explicite return
    return num1 + num2                  // in this case there is need to add return satements

    // and when only () => (num1 +num2)              // Implecite return
               // there is a not need to written return statement
const add = (num1, num2) => ({username: "Dhaval"})

console.log(add(3,4));