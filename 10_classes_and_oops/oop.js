const user = {
    username: "Hitesh",
    loginCount: 18,
    SignedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.getUserDetails());

function User(username , loginCount , isLoggedIn){
    this.username = username
    this.isLoggedIn = isLoggedIn
    this.loginCount = loginCount

    this.greetings = function(){
        console.log(`Welcome , ${this.username}`)
    }

    return this
}

const userOne = new User("hitesh",12,false);
const userTwo = new User("Chai", 8 , false)
console.log(userOne.constructor);
// console.log(userTwo);