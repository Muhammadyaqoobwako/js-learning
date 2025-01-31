//dates 
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);//It's an object 

// let myCreatedDate = new Date(2021,0,09) //months starts with 0 to 11 and if we add more values in it than it becomes time hours and many more things 
// let myCreatedDate = new Date(2021,0,09,11,12) //months starts with 0 to 11 and if we add more values in it than it becomes time hours and many more things 
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("2023-01-14")//mm:yy:DD
//console.log(myCreatedDate.toLocaleString());
 
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());//for converting time into mili seconds 
//console.log(Math.floor(Date.now()/1000));//For Converting Date or time into seconds 

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth()+1);//we can easily get month by using this 
//console.log(newDate.getDay()+1);//we can easily get Day by using this 

//string interpulation
//'${newDate.getDay()}and the time'

newDate.toLocaleString('default',{
    weekday: "long"
})





