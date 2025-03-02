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
        //console.log("Please enter your username ");
        return 
    }
    // if(username === undefined){
    //     console.log("Please enter your username ");
    //     return 
    // }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Yaqoob"));

function calculateCartPrice(val1,val2, ...num1){ //... it's a rest operator here i have use it because i want to show the rest of the cart price if i simply return it than 4 
// it will only show first one thats why i used rest in rest it pack all values in bundle and show it to you 
    return num1 
}
//console.log(calculateCartPrice(200,300,400,2000));

const user = {
    username: "Yaqoob",
    price: 199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} & price is ${anyobject.price}`);
}

//handleobject(user)

handleobject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));
