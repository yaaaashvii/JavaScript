//primitives : call by value , value is copied
// string , number , boolean , null, undefined, symbol, BigInt
//e.x.
let userEmail; //undefined
const id = Symbol('123')
const id2 = Symbol('123')  //symbol = unique
console.log(id ===id2);  

//reference : non primitivies
//arrays , objects , functions

const heros = ["stark", "hulk", "Dr.strange"]
let myObj = {
    name : "yashvi",
    age : 20,

}

const myFun=function(){
    console.log("hello")
}

console.log(typeof id)

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them


//memory 
//1. stack(primitive: copy of var)
// 2.heap(non-primitive : refernce of original val)
//e.x.

let myName =  "yashvi"
let name2 = myName
name2 = "yashvi gupta"
console.log(myName);  
console.log(name2);


let userone={
    email : "user@gmail.com",
    upi: "user@ybl"

}
let userTwo = userone
userTwo.email = "yashvi@gmail.com"


console.log(userone.email);
console.log(userTwo.email);


 const name = "yashvi"
 const count = 2

 //console.log((name + count+ " value")); //not a rec 

 console.log(`hello my nameis ${name} and my count is 4{count}`);

 const game = new String('Yashvi-g')
 console.log(game[0]);
 console.log(game.__proto__);

 console.log(game.length);
 console.log(game.toUpperCase());
 console.log(game.charAt(2));
 console.log(game.indexOf('s'));
 
 const newString = game.substring(0,4) //last value is not included
 console.log(newString);
 const newString2 = game.slice(-5,4)
 console.log(newString2);

 const newString3 = "   yashvi  "  //remove spaces form start and end (works on whitespaces only)
 console.log(newString3.trim());


 const url = "https://google.com/yashvi%20gupta"  //brwoser doesnot understand spaces so it will convert it to %20 

 console.log(url.replace('%20', '-'));
 console.log(url.includes('vi'));
 console.log(game.split('-'));
