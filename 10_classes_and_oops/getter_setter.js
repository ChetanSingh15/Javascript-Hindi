class user {
    constructor(email , password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(val){
        this._email = val;
    }
    get password(){
        return `${this._password}hitesh`
    } 
    set password(val){
        this._password = val;
    }
}

const hitesh = new user("h@ai.in","rgh")
console.log(hitesh.password);
console.log(hitesh.email);