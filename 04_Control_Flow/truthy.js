// const userEmail = "yaqoob@gmail.com" //if we send thid by any true and false it is by default true because it's an string value 

// if ( userEmail){
//     console.log("got the user email");
// }else{
//     console.log("Don't have user email");
    
// }

//if i don't have user email

// userEmail = ""

// if ( userEmail){
//     console.log("got the user email");
// }else{
//     console.log("Don't have user email");
    
// }
 
//then it will return else condition 

//if we have array

// userEmail = []

// if ( userEmail){
//     console.log("got the user email");
// }else{
//     console.log("Don't have user email");
    
// }


// falsy value

//false
//zero negative zero , BigInt, , " " , undefined, null , NaN

//truthy values 

//"0", 'false' , " ", [], {}, functiom(){}

//how we check array is empty  
// if (userEmail.length === 0 ){
//      console.log(" Array is empty");
// }

//here how we write an object
// const emptyobj = { }

// //this is how we check object is empty or not 
// if(Object.keys(emptyobj).length == 0 ){
//     console.log("object is empty");
// }

// Nullish Coalescing Operators (??): null and undefined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 11

// console.log(val1);

// terniary operator 

// condition ? true : false

const iceTeaprice = 100
iceTeaprice >=80 ? console.log("less than 80") : console.log("more than 80");

