//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

//NOTE--> NODE scope (code enviroment) OR BROWSER SCOPE ARE DIFFRENT.


//Nested scope
function one(){
    const username = "happy"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "happy"
    if (username === "happy") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){ //only function
    return num + 1
}



addTwo(5)
const addTwo = function(num){ //variable hold
    return num + 2
}


//hoesting ? --> explore more