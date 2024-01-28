// for of loop

// ["",""]
// [{},{}]

const arr = [1,2,3,4,5]

for (const num  of arr) {
   // console.log(num);
}

const greetings = "Hello World!!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}
    
// map 

const map = new Map()
map.set('IN' , "INDIA")
map.set('Fr' , "France")
map.set('USA' , "UNITED STATES")

console.log(map);

for (const [key, value] of map) {
   console.log(key,':-', value);
}

const myObject = {
   'game1': 'NFS',
   'game2': 'Spiderman'
}

// for (const [key,value] of myObject) {
//    console.log(key, ':-', value);
// }

