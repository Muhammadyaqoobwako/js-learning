//reduce method 

// const  myNumers = [1,2,3]

// const myTotal = myNumers.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)//here we have pass zero to acc


 //console.log(myTotal);


 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 1999
    },
    {
        itemName: "C course",
        price: 4555
    },
    {
        itemName: "C++ course",
        price: 3999
    },
    {
        itemName: "java course",
        price: 1080
    }
 ]

 const priceTopay = shoppingCart.reduce((acc,item)=> acc + item.price, 0)
 console.log(priceTopay);
 