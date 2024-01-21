// Immediately Invoked Function Expressions (IIFE)

(function chai() { // named iife
    console.log(`DB CONNECTED`);
}) ();

// (function defintion) (execution call)

// to remove the global scope pollution i.e variable or parameters
// ( function aurcode() {
// console.log(`DB connected two`);
// }) ()

((name) => { // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
}) ('aakansha')