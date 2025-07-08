//object literal mean make the object 
const user ={
    username: "yaqoob",
    loginCount: 0,
    signedIn: true,

    getuserdetails: function(){
        console.log("Got user details from database");
        
    }
}

console.log(user.username);
console.log(user.getuserdetails);

