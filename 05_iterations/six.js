// const codding = ["js", "ruby", "java", "python", "cpp"];

// const values = codding.forEach( (item) => {
//     console.log(item);
//     return item;
// });

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

// const newNums = myNums.filter( (num) => {
//     return num > 4                                    // when we use arrow function and add curley braces in function, than remember to add return before adding a condition, if we not add a 
//                                                   // a condition than the result is undefined so must add a return before the condition in a curley braces.
// });
// console.log(newNums);

// const newNums = []

// myNums.forEach ( (num) => {                   // it's using the forEach method // both have a same result but method is different.
//     if ( num > 4) {
//         newNums.push(num)
//     }
// });

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', Publish: '1981',
    Edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', Publish: '1992',
    Edition: 2008},
    { title: 'Book Three', genre: 'History', Publish: '1999',
    Edition: 2007},
    { title: 'Book Four', genre: 'Non-Fiction', Publish: '1989',
    Edition: 2010},
    { title: 'Book Five', genre: 'Science', Publish: '2009',
    Edition: 2014},
    { title: 'Book Six', genre: 'Fiction', Publish: '1987',
    Edition: 2010},
    { title: 'Book Seven', genre: 'History', Publish: '1986',
    Edition: 1996},
    { title: 'Book Eight', genre: 'Science', Publish: '2011',
    Edition: 2016},
    { title: 'Book NIne', genre: 'Non-Fiction', Publish: '1981',
    Edition: 1989},
]


// const userBooks = books.filter ( (bk) => bk.genre === 'History')

const userBooks = books.filter ( (bk) => {
    return bk.Publish >= 1995 && bk.genre === 'History'
})

console.log(userBooks)