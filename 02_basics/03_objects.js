// singleton
// Object.create

// object literals

const mySmbol = Symbol("Key1")

const JsUser = {
    name: "Hitesh",
    "full name":"Hitesh Chaudhary",
    [mySmbol] : "myKey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySmbol])


JsUser.email = "Hiteah@gx.com";

// console.log(JsUser.email);

// Object.freeze(JsUser)
JsUser.email = "Hiteah@pxt.com";
// console.log(JsUser.email);
// console.log(JsUser);

JsUser.greetings = function (){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function (){
    console.log(`Hello JS User,${this.name}`);
}

// console.log(JsUser.greetings);
console.log(JsUser.greetings());
console.log(JsUser.greetingTwo());