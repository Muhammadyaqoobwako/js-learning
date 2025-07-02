//for
for (let index = 0; index < 10; index++){
    const element = index;
    if(element == 5){
        // console.log("5 is best number");
    }
//  console.log(element);
}


for (let i= 0; i < 10; i++){
    // console.log(`outter loop value ${i}`);
    for(let j = 0 ; j < 10 ; j++){
     // console.log(`inner loop value ${j} and outter loop value ${i}`);
    //  console.log(i + "*" + j+' = ' + i*j);
     
    } 
}

let myArray=["flash", "batman", "superman"];
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++){
    const element = myArray[index];
    // console.log(element);
    
    
}

//break and continue
for (let i = 0 ; i <= 20;  i++){
    if (i == 5 ){
        console.log("5 dtected");
        break //it break the flow 
    }
    console.log(`value of i is ${i}`);
}
for (let i = 0 ; i <= 20;  i++){
    if (i == 5 ){
        console.log("5 dtected");
        continue //ek bari ignore kar do 
    }
    console.log(`value of i is ${i}`);
}


