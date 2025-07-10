// let myName = "yaqoob"

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let Heropower ={
    thor: "hammer",
    spiderman: "sling", 

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log(`yaqoob is present in all objects `);
    
}

Array.prototype.heyYaqoob = function(){
    console.log(`yaqoob says hello`)
}

// Heropower.yaqoob();
//myHeros.hitesh();

//myHeros.heyYaqoob();
// Heropower.heyYaqoob();


//inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher ={
    makeVideo: true
}

const TeachingSupport ={
    isAvaliable: false
} 

const TASupport = {
    makeAssigement: 'JS assigement',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ =  User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
    
}

// anotherUsername.trueLength()

 anotherUsername.trueLength()
 "yaqoob".trueLength()
 "iceTea".trueLength()