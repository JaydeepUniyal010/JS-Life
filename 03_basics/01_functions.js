
function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("P");
    console.log("P");
    console.log("Y");
    console.log("Y");
    //1000 times same work
}

// sayMyName()




// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }




function addTwoNumbers(number1, number2){ //with return

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "jay"){ //default value
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("happy"))
// console.log(loginUserMessage("happy"))  //override value with jay

//******************* for unlimited parameter**********************************
function calculateCartPrice(val1, val2, ...num1){ //rest operator/ ...num1?
    return num1
}
//... khudra vikreta (rest operator) ***
// console.log(calculateCartPrice(200, 400, 500, 2000)) //saman liye 


const user = {
    username: "happy",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({ //direct object
    username: "hpy",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); //direct 
