// Primitive

// 7 types : String , Boolean , Number , null , undefined , Symbol , Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId )

const bigNumber = 2465456164164163646163154n

// Reference (Non-Primitive)

// Arrays , Objects , Functions

const heroes = ["Shaktiman","Nagraaj","Doga"]

let myObj = {
    name: "Chetan",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof id)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let myYtname = "Hiteshchaudharydotcom"

let anotherName = myYtname

anotherName = "Hitesth@ic.in"

console.log(myYtname)
console.log(anotherName)

let userOne = {
    email: "Hitesh@email.com",
    upi: "userOne@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
 