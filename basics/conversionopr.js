let score = 33
let score1 = "33abc" //no proof that it's string or number 

//let score = null o/p > 0
// let score = undefined o/p =>nan
//let score = true o/p 1
 //let score = "yashvi"   //cano=not be converted into number o/p => nan
console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score1) //guarantee it's a number 
console.log(typeof valueInNumber); //"33abc" will be converted into number type 
console.log(valueInNumber); //but the value will be nan not a number
//"33abc" type in number , but cannot be converted into number 


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);  //empty string => false "yashvi"=> true

let num = 33
let str = String(num)
console.log(str);
