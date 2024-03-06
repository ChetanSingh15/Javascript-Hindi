class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `456`
    }
}

const hitesh = new User("Hitesh")
// console.log(hitesh.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const Iphone = new Teacher("Iphone","i@phone.com");
Iphone.logMe()
console.log(Iphone.createId());