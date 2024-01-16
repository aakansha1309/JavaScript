// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 != 1);


// console.log("2" > 1);  // not a good practice datatypes should be same
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);  //the reason is that an equality check == and comparisons > <= <= work differently. Comparisons convert null to a number treating it as 0. Thats why null >= 0 is true & null >= 0 is false

console.log(undefined == 0)
console.log(undefined >= 0)
console.log(undefined <= 0)

// === strict check datatype bhi check karega
console.log(2 === 2);
console.log("2" === 2);