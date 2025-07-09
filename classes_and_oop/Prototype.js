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

Heropower.yaqoob();