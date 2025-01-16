//kaise data memory mai rakha jata hai or kaise access kiya jata hai. wo 2 type se hote hain.. 
// primitive or non-primitive

//  Primitive (call by value => copy)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt 
//null ---AC temp jab server se lana tha to jab temp nahi aaya tha to wo 0 nahi tha wo null tha.

const Score =100
const scoreValue =110.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined
//let userEmail = undefined

//********************************* symbol**************************************************

 const id =  Symbol('789')
 const anotherId= Symbol('789')
 //console.log(id === anotherId); //false(not same)

//*********************************BIG INT**************************************************
 
 const bigNumber = 46679586084425246n  //why n?
//  console.log(bigNumber);
 

 //Reference (Non primitive => call by refrence)
 // Array, Objects, Functions

 const heros = ["peter parker", "Shaktimaan", "doga"];
//  console.log(heros);
 
 //obj => always in key-value pair
let myObj = {
    name: "Happy",
    age: 25,
    married: false,
}

//function
const myFunction =function() {
    // console.log("Love Life Live")
}

// console.log(typeof bigNumber);
// console.log(typeof anotherId);
// console.log(typeof myFunction);


// https://262.ecma-international.org/5.1/#sec-11.4.3

// *********************************************************************************************************




//*****************************MEMORY*************************************************************************
//Stack (Primitive) -> Copy, 
//Heap (Non-Primitive) ->refrence or original

let myYoutubeName = "TechnicalDadaJii"

let anotherName = myYoutubeName
anotherName ="nayawali"

console.log(anotherName);
console.log(myYoutubeName);


let user1 ={
    email: "avm@gmail.com",
    upi: "user@Pyl" ,
}

let user2 =user1;

user2.email = "yahoo@window.com" //(not copy )

console.log(user1.email);
console.log(user2.email);
