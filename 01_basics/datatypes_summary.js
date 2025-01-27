// primitive data types 

// 7 TYPES:string, Number, boolean, null, undefiend, symbol, bigint
// symbol we use to make any variable unique 

//reference (non primitive)
// arrays, objects,functions


//JavaScript is a dynamically typed language. 
//This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it.
// You can assign different types of values to a variable during its lifetime.


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive)=> in this we get copy of any value, 
// Heap(Non-Primitive)=>in this we get the actual refrence of the value 

//stack(permitive) 
//Heap(non-permitive)

let myYoutubename = "Sahil"

let anothername = myYoutubename
anothername = "yaqoob"
console.log(myYoutubename);
console.log(anothername);

let user{
    email = "sahil@gmail.com",
    cnic = "112212"
}

let usertwo = user
usertwo.email = "yaqoob@gmail.com"

console.log(user);
console.log(usertwo);