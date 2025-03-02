function sayMyName(){
    console.log("Y");
    console.log("a");
    console.log("q");
    console.log("o");
    console.log("o");
    console.log("b");
}

//sayMyName()
//function is a packet in which there are multiple variables if we need them we simply call the function means by taking its copies 
// function addTwoNumbers(number1,number2){//parameters
//     console.log(number1+number2);//arguments
// }

function addTwoNumbers(number1 , number2){
    //let result = number1 + number2
    //console.log("Yaqoob");
    // return result
    //console.log("Yaqoob"); //yaha p return k bad function kma nahi krta 
    return number1 + number2
}

const result = addTwoNumbers(3,5)

//console.log("Result: ", result);



function loginUserMessage(username = "Sam"){
    //another way to write it 
    if(!username){
        console.log("Please enter your username ");
        return 
    }
    // if(username === undefined){
    //     console.log("Please enter your username ");
    //     return 
    // }
    return `${username} just logged in`
}
console.log(loginUserMessage("Yaqoob"));
