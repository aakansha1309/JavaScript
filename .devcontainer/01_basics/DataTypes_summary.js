// PRIMITIVE - call by value

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

// symbol
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// // bigInt
// const bigNumber = 34567897754321n;


// NON PRIMOTIVE OR REFERENCE 

// arrays, objects*, functions

// const heros = ["shaktiman","naagraj","doga"] // array
// let myObj = {  // obj
//     name: "Aakansha",
//     age: 22
// }

// const myFunction = function() {
//     console.log("Hello world");
// }
//console.log(typeof bigNumber)
// return typeof non primitive datatype is Object.

// memory
// Stack (primitive ) Heap (non primitive)

let myName = "aakansha";
let anothername = myName;
anothername = "chaku";

console.log(myName)
console.log(anothername);

let userOne = {
    email: "tidkeaakansha13@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "aakansha13@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);