"use strict"; // treat all JS code as newer version
//alter (3+3) we are using node.js not a browser
// number -> 2^53 
//console.log(typeof null); // lang error
//console.log(typeof undefined);

// datatype conversion

//let score = 33;
//console.log(typeof score);
//let score = "33";
//let valueInNumber = Number(score);
//console.log(typeof valueInNumber);

let score = "33abc";
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);