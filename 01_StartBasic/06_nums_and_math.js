const score = 400 
// console.log(score); //400

const balance = new Number(100)   //explict declare by us
// console.log(balance);  //number:400

// console.log(balance.toString().length); //convert in string
// console.log(balance.toFixed(1)); //100.4 =>100(fix)

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //123.8966 ==> 124, 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //100000==> 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //-4 ==> 4
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


// math.random (Tmportant)
console.log(Math.random());// value betwwn 0 and 1.
console.log((Math.random()*10) + 1); //+1 for avoid 0
console.log(Math.floor(Math.random()*10) + 1); //exact value

const min = 10
const max = 20

//IMPORTANT FORMULA
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
