function SetUsername(username){
    //complex DB Call 
    this.username = username
    console.log("called");
    
}

function createUser(username,email,password){
    SetUsername.call(this, username) //here in this scenario we have used call to hold refernce 
    //call jo h hamra current excution context kesi or function k pass kr deta h 

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
