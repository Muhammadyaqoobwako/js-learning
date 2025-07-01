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
(  (name) => {
    console.log(`DB Connected Two ${name}`);
    
})('Yaqoob')

//=> we use if to clear pollution of global scope
