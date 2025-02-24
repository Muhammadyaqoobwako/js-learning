//singleton
//Object.create//constructor method and in this we have singleton



const mySym = Symbol("Key1")

//object literals
const JsUser = {
    name : "Yaqoob",
    "Full name": "Muhammad Yaqoob Wako",
    [mySym]: "myKey1",//if you want represent  a symbol than you have to write it in square brackets else you can write it without it for not a symbol 
    Age : 20,
    location : "Karachi",
    email : "Yaqoob@google.com",
    isLoggedIn: false,
    Lastlogindays: ["Monday","Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser ["email"])
// console.log(JsUser["Full name"])
// console.log(typeof JsUser.mySym)
// console.log(JsUser[mySym])

//in this we have access the object with dot and square brackets sometime we can use both and sometime we only use square brackets only

JsUser.email = "Dell@gmail.com";
//Object.freeze(JsUser);//to freez any object that no one can change it 
//console.log(JsUser.email);
JsUser.email = "Dell@microsoft.com";
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);//when you have to refer same object than we use this
    
}
//console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

