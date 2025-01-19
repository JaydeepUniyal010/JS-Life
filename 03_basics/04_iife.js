// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //semi colon always in iife

//NOTE-> for reduce the global polution and immidate execution, we use iife function 
// ()execution ()declaration ==> () () 

( (name) => {
    //simple or unnammed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('jaydeep') //pass name here
