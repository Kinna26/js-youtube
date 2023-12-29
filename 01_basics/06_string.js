const name = "krishna"
const repoCount = 50

//console.log(name+ " " + repoCount+ " bahot saari");

console.log(`Hello my name is ${name} and my repo count is 
${repoCount}`);

// above type of concating of string is called String interpolation

const gameName = new String ("krishna-parihar")

console.log(gameName)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0, 6)
console.log(newString)

const anotherString = gameName.slice(-1, 6)
console.log(anotherString)

const newString1 = "  Krishna  "
console.log(newString1)
console.log(newString1.trim())

const url = "https://krishna.com/krishna%20parihar"

console.log(url.replace('%20', '-'))

console.log(url.includes('Kinna'))

console.log(gameName.split('-'))


