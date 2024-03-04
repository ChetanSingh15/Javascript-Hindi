function setUsername(username){
    // Complex DB calls
    this.username = username;
}

function createUser(username, email , password){
        setUsername.call(this,username);
        this.email = email,
        this.password = password
}

const chai = new createUser("chai","chai@fc.com", "12345678");
console.log(chai);