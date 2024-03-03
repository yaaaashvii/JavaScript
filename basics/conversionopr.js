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

//operation:
let value = 3
let negvalue = -value
console.log(negvalue)

let str1 = "hello"
let str2= " yashvi"
let str3 = str1+str2
console.log(str3);  //o/p=> hello yashvi 
 

//complex e.g.
console.log("1"+2) //op=> 12 (string) 
console.log(1+"2") //op=> 12
console.log("1"+2+ 2) //op 122
console.log(1+2+"2") //op 32
console.log(1+2*2%4) //op=>1 but use paranthesis for better visualization and professionalism

//comparisons

console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2!=1);
//problem 

console.log("2">1);
console.log("02">1); //both showing op true but different datatypes cannot be compared 

console.log(null>0);  //F
console.log(null==0); //F
console.log(null>=0); //T
// equality check (==)and comparison(> <) opr works differently
//comparison convert null to a number treating it a a 0 
console.log(undefined ==0) //op => false in any condition it will give false 


//strict check 
console.log("2"===2 ); //it will check datatypes too