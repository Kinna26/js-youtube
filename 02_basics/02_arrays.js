const marvel_heros = ["thor", "iron man", "spiderman"]
const dc = ["super man", "flash", "batman"]

//marvel_heros.push(dc)
//console.log(marvel_heros)

console.log(marvel_heros.length)

const mergearray = marvel_heros.concat(dc) // to add two array
console.log(mergearray)

const all_new_heros = [...marvel_heros, ...dc] // spread method to add multiple array
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] 
console.log(another_array)

const real_another_array = another_array.flat(Infinity) // make a single array from multiple sub array
console.log(real_another_array)

console.log(Array.isArray("Krishna")) // to find is this a Array
console.log(Array.from("Krishna")) // to convert into array
console.log(Array.from({name : "Krishna"})) // It will give empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

