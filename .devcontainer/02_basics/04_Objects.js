//const tinderUser = new Object() // singleton
// const tinderUser = {} // non singleton

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aakansha",
            lastname: "Tidke",
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },{
        id: 1,
        emaill: "a@gmail.com"
    },
]
users[1].email
//console.log(tinderUser);

// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));


const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh"
}

//course.courseInstructor
const {courseInstructor: instructor} = course // destructure

//console.log(courseInstructor);
console.log(instructor);



