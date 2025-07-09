function multipleBy5(num) {
    return num * 5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.incerment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe();

/*

here's what happens behind the scences when the new keyword is used:

A new object is created: The new keyword initiates the creation
of the a new JavaScript object.

A prototype is linked: the newly created object gets linked 
to the prototype property of the construtor function.
this means that it has access to properties and methods
defined on the constructor's prototupe.

The constructor is called: the constructor function is called 
with the specified arguments and this is bound to the newly 
creatd object. If no explicit return value is specified from 
the constructor, JavaScript assumes this, the newly created 
object, to be the intended return value.

the new object is returned: After the constructor function has been
calles, if it doesn't return a non-primitive value (object, array,function etc.)
the newly created object is returned. 

*/