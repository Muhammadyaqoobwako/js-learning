//Singleton object

//const tinderUser = new object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

//nested objects 
const regularUser = {
    email: "yaqoob@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Muhammad",
            lastname: "Yaqoob"
        }
    } 
}

//console.log(regularUser.fullname.userfullname.firstname);

//merging two or more than two objects 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1 , obj2}

//const obj3 = Object.assign({},obj1,obj2,obj4);

const obj3 = {...obj1, ...obj2} //(...)=> means spread objects we gonna use it 90% of the time 
//console.log(obj3);

//when we get values from data base we gonna use the most
const users = [
    {
        id: 1,
        email: "yaqoob@gmail.com"
    },
    {
        id: 1,
        email: "yaqoob@gmail.com"
    },
    {
        id: 1,
        email: "yaqoob@gmail.com"
    },
    {
        id: 1,
        email: "yaqoob@gmail.com"
    },
    {
        id: 1,
        email: "yaqoob@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//keys shows us data it array
console.log(Object.values(tinderUser));//values shows the assign value
console.log(Object.entries(tinderUser));//entries shows the assign values and the variable as the key in different partion

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//it checks that tinderuser the object i have created has property isLoggedIn or not it will return us true or false.
