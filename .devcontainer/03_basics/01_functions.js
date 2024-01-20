function sayMyName() {
    console.log("A");
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("A");
}
// sayMyName()

// function addTwoNumbers(number1,number2) {
//    console.log( number1 + number2);
// }

function addTwoNumbers(number1,number2) {

//  let result = number1 + number2
//  return result

       return number1 + number2
 }

const result = addTwoNumbers(3,4)

// console.log("Result: ",result);

function loginUserMessage(username) {
    if(username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("aakansha"))

function calculateCartPrice(val1, val2,...num1) { // rest operator
    return num1
}

//console.log(calculateCartPrice(200, 400, 500)) // here 200 is assign to val1, 400 to val2 & rest to num1

const user = {
    username: "Aakansha",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "Anshu",
    price: 399
})

const myNewarray = [200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[1]
}

//console.log(returnSecondValue(myNewarray));
console.log(returnSecondValue([200,400,500,1000]));