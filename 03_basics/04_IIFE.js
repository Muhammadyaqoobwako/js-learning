//Immediately Invoked Function Expressions (IIFE)


// function chai() {
//     console.log(`DB Connected`);
// }
// chai()

//it can work like this 
// (function chai() {
//     console.log(`DB Connected`);
// })();

//=>can we write it in arrow function named IIFE
// ( function aurcode() {
//     console.log(`DB Connected Two`);
    
// })()

// without function name 
// (  () => {
//     console.log(`DB Connected Two`);
    
// })()

//if we want to pass the name or vaiable in the function
// (  (name) => {
//     console.log(`DB Connected Two ${name}`);
    
// })('Yaqoob')

//=> we use if to clear pollution of global scope


//this a topic
//execute code + call stack

// function one(){
//     console.log("one");
    

// }
// function two() {
//     console.log("two");
    
// }
// function three() {
//     console.log("three");
    
// }

// one()
// two()
// three()


function one() {
    console.log("one");
    two()
}
function two() {
    console.log("two");
    three()
}
function three() {
    console.log("three")
}
one()
two()
three()