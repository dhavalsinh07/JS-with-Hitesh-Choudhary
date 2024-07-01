// Imediately Invoked Function Expressions (IIFE)

(function chai() {
    // NAMED IIFE
    console.log(`DB CONNECTED`);
}());

// chai()

// for interview on iife answer like this, there is problem in global scope pollution, so remove the pollution of global scope we use iife.

// ()();            // first () for a fucnction defenition  and second() for a execution
// when the interviewer asked to write two iife then use seperate iife by ; this.

( (name) => {
    // UNNAMED IIFE
    console.log(`DB CONNECTED TWO ${name}`);
}) ('dhaval')
