const name = "Aakansha"
const repoCount = 10

//console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String('aakansha_t')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// // objects use
// console.log(gameName.length)
// console.log(gameName.toUpperCase());

console.log(gameName.indexOf('t'));
console.log(gameName.charAt(2));

const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(-9,4)
console.log(anotherString)

const newStringOne = "        Aakansha  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aakansha.com/aakansha%20tidke"
console.log(url.replace('%20','-'))
console.log(url.includes('aakansha'))

console.log(gameName.split('_'))