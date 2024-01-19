// objects can be declared in two ways : 1. literal 2. constructor
// singleton - can ce declared by constructor. if we use any other method then it is not singleton it will have multiple objects

// Object.create // constructor method 

// object literals

const mySym =Symbol("key1")


const JsUser = {
    name: "Aakansha",
    "full name": "Aakansha Tidke",
    [mySym]: "mykey1",
    age: 23,
    location: "Nagpur",
    email: "aakanshatidke@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]); // here we have to specify as a string
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser.mySym);

JsUser.email = "aakanshatidke@gpt.com"
//Object.freeze(JsUser)
JsUser.email = "aakansha@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());