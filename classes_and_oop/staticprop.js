class User{
    constructor(username){
        this.username = username
    }

    logME(){
        console.log(`username: ${this.username}`);
        
    }

    static createId(){
        return `123` //static rokta h k har bar us id ka acces na diya jai 
    }

}

const yaqoob = new User("yaqoob")
//console.log(yaqoob.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email =  email
    }
}


const iphone = new Teacher ("iphone", "iphone@gmai.com")
console.log(iphone.createId());

