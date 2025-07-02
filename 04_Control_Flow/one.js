//if 
// const isUserLoggedin = true;

// if( 2 === "2"){
// console.log("excuted");

// }else{

// }

// >, <, <= , >= =, == , !=, ===, ==!
//=== => we use this for checking number type and assigement
//==! => it check the negative number 

//var is completly global 

// const score = 200;

// if ( score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// }
//     console.log(`user power: ${power}`);

// const balance = 1000
// if (balance > 500) console.log("test"), console.log("test2"); //bad code 

// if (balance < 500){
//     console.log("Balabce is less than 500");
    
// }else if(balance < 750 ){
//     console.log("Balance is less than 750");
    
// }else if (balance < 900){
//     console.log("Balance is less than 900");
    
// }else{
//     console.log("It's less than 1200");
// }


const isUserLoggedin = true
const debitCard = true 
const loggedFromGoggle = false
const loggedInFromEmail = true

if(isUserLoggedin && debitCard && 2==3){
    console.log("Allow user to buy courses");
}

if(loggedInFromEmail || loggedFromGoggle){
console.log("user Loggedin");

}