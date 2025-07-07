const  promiseOne = new Promise (function(resolve, reject){
    //Do async task
    //DB call, cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() //connecting  then and resolve 
    },1000)
})

//then jo h related or connected h resolve se and yeh function automaticaly chezy 
//return karta h jo bhi opar kam hoa h 
promiseOne.then(function() {
    console.log("Promise consumed");
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("async 2 resolved");
    
})

//how to take data from network 
const PromiseThree =  new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})
    },1000)
}) 

PromiseThree.then(function(user){
console.log(user);

})


const promiseFour = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = true 
        if (!error) {
             resolve({username: "Yaqoob", password: "123"})
        }else{
            reject('Error: Something Went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
 console.log(user);
 return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(( )=>console.log("the promise is either resolved or rejected ")
)

const promiseFive = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript", password: "123"})
        }else{
            reject('ERROR:js went wrong')
        }
    }, 1000)
})

//2nd approach
async function consumepromiseFive(){
    try{
    const response = await promiseFive
    console.console.log(response);
    }catch(error){
        console.log(error);
        
    }
}

consumepromiseFive()



// async function getAllUsers(){
// try{
//         const response = await fetch('url')
//     const data = await respone.json()
//     console.log(data)   
// }catch(error){
//     console.log("E:", error);
    
// }
// }

//getAllUsers()


fetch('url')
.then((response) => {
   return response.json()
})
.then((data)=>{
console.log(data);
})
.catch(error)=>console.log(error)