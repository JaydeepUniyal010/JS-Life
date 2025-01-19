//NOTE--> window object is a global object in browser

const user = {
    username: "happy",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //this ==> current context
        //console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "goldy"  //change value
// user.welcomeMessage()

//console.log(this); //node vs browser

// function chai(){
//     let username = "happy"
//     console.log(this.username); //not use this in function ===? undefined
// }
// chai()

//  const chai = function () {
//     let username = "happy"
//     console.log(this.username); //undefined
//  }

//const chai =  () => { //arrow
//    let username = "happy"
//    console.log(this); // {} 
// }

// chai()

//arrow function syntax ==> () =>{}

//  const addTwo = (num1, num2) => { //arrow function
//     return num1 + num2
// }

//implicit return
//const addTwo = (num1, num2) =>  num1 + num2

//const addTwo = (num1, num2) => ( num1 + num2 ) // not return keyword

const addTwo = (num1, num2) => ({username: "happy"}) //object 


console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(() => {})
