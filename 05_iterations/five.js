const codding = ["js", "ruby", "pyrthon", "c++", "java"]

// codding.forEach(  function (val) {
//     console.log(val);
// })

// codding.forEach( (item) => 
//     {console.log(item);
// })


// function printMe (item) {
//     console.log(item);
// }

// codding.forEach(printMe)


// codding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCodding = [ 
    {
        languageName : "Javascript",
        languageFile : "js"
    },
    {
        languageName : "Java",
        languageFile : "java"
    },
     {
        languageName : "Python",
        languageFile : "py"
     }
    ]


     myCodding.forEach( (item) => {
        console.log(item.languageName);
     })