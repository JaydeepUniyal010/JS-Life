//NOTE--> window object is a global object in browser

const user = {
    username: "happy",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "goldy"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "happy"
//     console.log(this.username);
// }
// chai()

//  const chai = function () {
//     let username = "happy"
//     console.log(this.username);
//  }

//const chai =  () => {
//    let username = "happy"
//    console.log(this);
// }

// chai()

//  const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return
//const addTwo = (num1, num2) =>  num1 + num2

//const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "happy"})


console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(() => {})