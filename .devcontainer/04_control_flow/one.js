// if

// const temperature = 41

// if(temperature < 50) {
//     console.log("yupss");
// }
// else{
//     console.log("Nope")
// }
// console.log("executed")

// const score = 200

// if(score > 100) {
// const power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

// const balance = 1000

// if(balance > 500) console.log("test"), // implicit scope
// console.log("test2")

// if(balance < 500) {
//     console.log("less than");
// } else if (balance < 750) {
//     console.log("less than 500");
// }
// else if (balance < 900){
//     console.log("less than 900")
// }
// else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if(loggedInFromGoogle|| loggedInFromEmail) {
    console.log("User logged in");
}