//{} => scope 

// let a = 300; //=> Global scope  
// if (true){
// let a = 10;
// const b = 3; //=> block scope
// var c = 30 ;
// };

// console.log(a);
// console.log(b);
// console.log(c);


//nested scope 

// function one(){
//     const username = "yaqoob"

//     function two(){
//         const website = "lapBazaar"
//         console.log(username);
        
//     }
//    // console.log(website);

//     two()
    
// }
// one()


if (true){
    const username = "yaqoob"
    if (username == "yaqoob"){
        const website = "LapBazaar"
        //console.log(username + website);
        
    }
  //  console.log(website);
    
}
//console.log(username);

//++++++++++++++ intersesting +++++++++++++
//they both are functions 
function addone(num){
    return num + 1
}

console.log(addone(5))

 //here we have done function
 addtwo(5) 
const addtwo = function(num){ 
    return + 2
}

