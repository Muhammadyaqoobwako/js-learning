//for each loop 
const coding = ["js", "ruby", "java", "python", "Cpp" ];
coding.forEach( function (val) {
    //console.log(val);  
})


//arrow function
coding.forEach((item)=> {
    //console.log(item);
    
})

function printMe(item){
    console.log(item);
    
}
//coding.forEach(printMe)

//here it shows you everything like array index number and item 
coding.forEach((item, index, arr)=> {
    //console.log(item, index, arr);
    
})

//["","",""] => objects in array 
//[{},{},{}] => objects in array

//objects in an array
const myCoding = [
    {
        lanuageName : "java",
        lanuageFileName : "java"
    },

    {
        lanuageName : "ruby",
        lanuageFileName : "rb"
    },

    {
        lanuageName : "javascript",
        lanuageFileName : "js"
    },

    {
        lanuageName : "python",
        lanuageFileName : "py"
    },

    {
        lanuageName : "C++",
        lanuageFileName : "Cpp "
    }
]
//excuting objects in array 
myCoding.forEach((item)=>{
    console.log(item.lanuageName);
    
})