// date : date objects represent a single moment in time in a platform independent format. Date object encapsulate an integral no. that represents milliseconds since the midnight at the beginnig of january.

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 0, 23);
//let myCreatedDate = new Date(2023, 0, 23, 5, 3);
let myCreatedDate = new Date("01-14-2024");
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday: "long",

}
)