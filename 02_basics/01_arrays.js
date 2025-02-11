const myArr = [0,1,2,3,4,5]
const myHeors =["shaktiman","ironman"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// //Arrays methods 
// myArr.push(6)//only add the value in array
// myArr.push(7);
// myArr.pop(myArr)
// console.log(myArr);

//myArr.unshift(9)//it add 9 on 0 position 
//myArr.shift();//remove zero postion or first postion element 
//console.log(myArr);
//console.log(myArr.includes(9));//it checks that the element i have searched is avaliabe or not in the array 
//console.log(myArr.indexOf(4));//checks the position of the input element if you enter the element that don't exist in the array it will give you -1 

//const newArr  = myArr.join()
//console.log(myArr);
//console.log(typeof newArr);//it combines the array as well as change the type of the array to string join

//Slice and splice 

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
const myn2 = myArr.splice(1,3)
console.log(myn2);

/*Feature	                slice()	   splice()
Modifies original array?	❌ No	  ✅ Yes
Returns a new array?	 ✅ Yes	      ✅ (Removed elements)
Use case? Extracting   elements   	Adding/removing elements*/











