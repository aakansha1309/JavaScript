// PRIMITIVE - call by value

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

// symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// bigInt
const bigNumber = 34567897754321n;


// NON PRIMOTIVE OR REFERENCE 

// arrays, objects*, functions

const heros = ["shaktiman","naagraj","doga"] // array
let myObj = {  // obj
    name: "Aakansha",
    age: 22
}

const myFunction = function() {
    console.log("Hello world");
}
console.log(typeof bigNumber)
// return typeof non primitive datatype is Object.