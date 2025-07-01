const user ={
    username: "yaqoob",
    price: 111,
//here this is a current context refer to the variable in the function 
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "Khan"
// user.welcomeMessage()

//console.log(this);//idhr empty h {};

//browser k andar jo global object h vho window h

// function chai(){
//     let username =  " yaqoob" => yeh excute nahi hoga yeh apna undefined ayi ga ku k hm this k object wagera main use karti h  
//     console.log(this.username);
    
// }
// chai() //esi kari g toh apni pas ek global value ayi g is main kafi values milti h  

// const chai = function () {
//     let username =  " yaqoob "
//     console.log(this.username);
    
// }
// chai()
//yeh bhi undefined h return kari ga 


// const chai = () => {
//     let Username = "yaqoob"
//     console.log(this.username);
    
// }

//=> this will  show undefined 

// chai()

// const chai () =>  {
//     let username = "yaqoob"
//     console.log(this);
    
// }
// chai()

//=> this also show empty {}

//how to declare functuions through arrow functions 

//basic arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2 
// }
// console.log(addTwo(3 , 4));

//implicit return matlb jaha p return nahi lagya explicit is ka ulta
// const addTwo = (num1, num2) => num1 + num2 
// console.log(addTwo(3 , 4));

//how we return object in it 
//const addTwo = (Number, num2) => ({username: "yaqoob"}) //yaha p agr ap yeh curli brackets use nahu kari g toh undefined ayi ga 

//console.log(addTwo(3,4));


//in loop
//const myArray = [2,5,3,7,8]

//myArray.forEach()