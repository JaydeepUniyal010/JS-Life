// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods ===> 

// myArr.push(6)
// console.log(myArr);


// myArr.push(7)
// console.log(myArr);


// myArr.pop()  //not give the value
// console.log(myArr);  


// myArr.unshift(9)  // why unshift not so good
// console.log(myArr);


// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9)); // 9 include hai ya nahi?
// console.log(myArr.indexOf(3)); // which index?

// const newArr = myArr.join() //important*  string convert

// console.log(myArr);
// console.log( newArr); //join change array to string


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  //manipulate the real array means value gayab
console.log("C ", myArr);
console.log(myn2);
