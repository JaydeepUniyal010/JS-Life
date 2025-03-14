const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); array under array
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //concat
// console.log(allHeros);

//spread
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] //important 

const real_another_array = another_array.flat(Infinity) //flat , infinity==> depth;

console.log(real_another_array); 



console.log(Array.isArray("Jaydeep")) 
console.log(Array.from("Jaydeep")) //convert
console.log(Array.from({name: "Jaydeep"})) // interesting case []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Array of
