//"happy" = " uniyal" ===>> in browser

const name = "jaydeep"
const repoCount = 50

//console.log(name + repoCount + " value"); //outdated not use now days

console.log(`hello my name is ${name} and my repo Count is ${repoCount}`); //modren days

//
const gameName = new String('happy-y') //declare string 
console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //position in index
console.log(gameName.indexOf('y')); //postion in which index


//Substring & Slice
const newString = gameName.substring(0,4); // never -ve value contain
console.log(newString);

const anotherString = gameName.slice(-3,7); // -ve value we use
console.log(anotherString);

//trim & Replace

const newStringOne = "   hakunamatata     "
console.log(newStringOne);
console.log(newStringOne.trim());

//Replace

const url = "https://jaydeep.com/jaydeep%20uniurl" 
console.log(url.replace('%20', '-')); // replace

console.log(url.includes('jay')); //true

console.log(url.includes('dog')); //false


//split
console.log(gameName.split('-'));






