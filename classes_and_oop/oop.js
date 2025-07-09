//object literal mean make the object 
const user ={
    username: "yaqoob",
    loginCount: 0,
    signedIn: true,

    getuserdetails: function(){
        //console.log("Got user details from database");
        //console.log(`username: ${username}`);//this will gives us error because we haven't define that which username we need 
        //console.log(`username: ${this.username}`);
        console.log(this);
        
    }

}

// console.log(user.username);
// console.log(user.getuserdetails);
// console.log(this);


//constructor function
// const promise = new Promise() //new is a constructor funtion which allows that from one object you can make multiple instances 

function User(username,loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    
    //return this it's implicitly defined
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("khan", 11, true);

console.log(userOne.constructor);

//instance of 
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true


