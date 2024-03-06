class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const chai = new Teacher("Chai","chai@gmail.com","12345678")

const Tea = new User("Tea","tea@teacher.com","12345")

chai.logMe()
Tea.logMe()

console.log(Tea instanceof Teacher);
console.log(Teacher instanceof User);
console.log(chai instanceof User);