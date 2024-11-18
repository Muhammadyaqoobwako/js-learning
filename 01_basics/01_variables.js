const accoutId = 12223344
let accountEmail = "sahil@gmail.com"
var accountPassword = "12345"
accountCity = "karachi"
let accountState;

// accoutId = 2

/*
prefer not to use var 
because of issue in block scope and functional scope 
*/
 
console.log(accoutId);

accountEmail = "sahilkhan@gmail.com "
accountPassword = "22211"
accountCity = "hyderabad"

console.table([accoutId,accountEmail,accountPassword,accountCity,accountState])

