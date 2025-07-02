//for of

const arr = [1,2,3,4,5];


for (const num of arr) { //yaha jo arr diya h maine yaha p pheli object tha us ka matlb k hm kis cheez p loop lagna chati h.
    //console.log(num);
    
    
}

const greetings = "hello world"
for (const greet of greetings) {
   // console.log(`Each Char is ${greet}`);
        
}

//maps 

const map = new Map() //=> maps only work for unique values  
map.set('Pak',"Pakistan")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('Pak',"Pakistan")

//console.log(map);

//printing it in loop by destructing the array making values and key seprately 
for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

//we check it works on object or not 
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject){
//     console.log(key , ':-', value); // it isn't working here 
    
// }