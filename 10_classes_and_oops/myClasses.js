// ES6

// class User {
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// } 

// const chai = new User("Chai","chai@gmail.com","12345");

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toLowerCase()}`
}

const Hi = new User("HI","hi@gmail.com","12345");

console.log(Hi.encryptPassword());
console.log(Hi.changeUsername());