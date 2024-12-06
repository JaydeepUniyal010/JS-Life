const name = "jaydeep"
const repoCount = 50

//console.log(name + repoCount + " value"); //outdated not use now days

console.log(`hello my name is ${name} and my repo Count is ${repoCount}`);

//
const gameName = new String('happy-y')
console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-3,7);
console.log(anotherString);

//trim & Replace

const newStringOne = "   hakunamatata     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://jaydeep.com/jaydeep%20uniurl" 
console.log(url.replace('%20', '-'));

console.log(url.includes('jay'));

console.log(url.includes('dog'));

console.log(gameName.split('-'));






