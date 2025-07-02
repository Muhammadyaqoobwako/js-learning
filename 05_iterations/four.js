    const myObject ={
        js: 'javascript',
        cp: 'C++',
        rb: "ruby",
        swift: "Swift by apple"
    }

    //for in loop it's not only for objects 
    for (const key in myObject) {
        //console.log(`${key} shotcut is for ${myObject[key]}`);
        
    }

    const programming = ["js", "ruby", "py", "java", "cpp"];

    for (const key in programming) {
    //    console.log(programming[key]);
        
    }

    //Difference b/w for of and for in loop
    /* in for of key fetch value but in for in key 
    fetch only the array index number */

//maps form file three.js
//map is not iteratable at this time but there are more ways to solve this 
// const map = new Map() //=> maps only work for unique values  
// map.set('Pak',"Pakistan")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('Pak',"Pakistan")

// for (const key in map) {
//     console.log(key);
    
    
// }