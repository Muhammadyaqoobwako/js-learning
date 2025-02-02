const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros);
//console.log(marvel_heros);

//const allheros = marvel_heros.concat(dc_heros)
//console.log(allheros);

const allheros =[...marvel_heros,...dc_heros]//spread it make every element of the array individual
//console.log(allheros);

const another_array = [1,2,3,[4,5,6],7,[6,7[4,5]]]
 
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

