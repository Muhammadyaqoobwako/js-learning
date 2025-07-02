const coding = ["js", "ruby", "java", "python", "cpp"]

//this don't return value 
// const values =  coding.forEach((value)=>{
//     console.log(value);
//     return value
    
// })
//console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((num)=> num > 4)
// console.log(newNums);


//in this if we open scope then we have to use return key word
const newNums = myNums.filter((num)=>{
return num > 4 
} )
console.log(newNums);
