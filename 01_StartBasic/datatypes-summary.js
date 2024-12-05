//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const Score =100
const scoreValue =110.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined
//let userEmail = undefined

 const id =  Symbol('789')
 const anotherId= Symbol('789')

 console.log(id === anotherId);
 
 const bigNumber = 46679586084425246n
 console.log(bigNumber);
 

 //Reference (Non primitive)

 // Array, Objects, Functions

 const heros = ["peter parker", "Shaktimaan", "doga"];
 console.log(heros);
 
 //obj
let myObj = {
    name: "Happy",
    age: 25,
    married: false,
}

//function
const myFunction =function() {
    console.log("Love Life Live")
}

console.log(typeof bigNumber);
console.log(typeof anotherId);
console.log(typeof myFunction);


// https://262.ecma-international.org/5.1/#sec-11.4.3

