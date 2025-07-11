const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

//console.log(descripter);

//console.log(Math.pI)
//Math.PI = 5
//consol.log(Math.PI)

const chai = {
    name: 'ginner chai',
    price: 250,
    isAvaliable: true,

    orderChai: function(){
        console.log("chai nhi bani");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name',{
    //writable: false,
    enumerable: false
})



for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
    }
}