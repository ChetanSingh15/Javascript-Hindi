const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Jammy"
tinderUser.email = "Jammy@jam.jam"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularUser = {
    email: "sma@sma.sam",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}

// console.log(obj3);

const users = [
    {
        id: "1",
        email: "hitrsh@goi.com"
    },
    {
        id: "2",
        email: "hitrsh@goi12.com"
    },
    {
        id: "3",
        email: "hitrsh@go566i.com"
    }
]

// console.log(users[0].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(instructor);

// {
//     "name": "Hiteah",
//     "coursename": "Js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


