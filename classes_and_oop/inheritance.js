class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME id ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)//replace of the call is super key word
        this.email =  email;
        this.password = password;
    }

    addCourse(){
        console.log(`new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")

// chai.addCourse()
chai.logMe()
const masalaChai = new  User ("masala chai")
masalaChai.logMe()
//console.log(chai === Teacher );

console.log(chai instanceof Teacher );
console.log(chai instanceof User );
