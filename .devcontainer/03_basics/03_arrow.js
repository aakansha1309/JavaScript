const user = {
    username: "Aakansha",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "aakansha"
//     console.log(this.username)
// }
// chai()

// const chai = function() {
//     let username = "Aakansha"
//     console.log(this.username)
// }

// const chai = () => { // arrow function
//     let username = "Aakansha"
//     console.log(this)
// }

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(2,3))

//const addTwo = (num1,num2) =>  num1 + num2  // implicit return
//const addTwo = (num1,num2) => ( num1 + num2)  // if we have wrapped up a function ina  parenthesis then we ned not have to write the return keyword but if we have use a curly braces ythen we have to write the return keyword
const addTwo = (num1,num2) => ({username: "Aakansha"})

console.log(addTwo(2,3))

const myArray = [2,5,3,7,8]

// myArray.forEach()