// Primitive Data types

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scorevalue=100.3
const isLoggedIn= false
const outsideTemp = null
let userEmail; 


const id = Symbol('123')
const anotherId = Symbol ("123")
console.log(id===anotherId)
// Above line code will give False because symbol gives 
// unique identity either we type the same value

// Javascript is Dinamically typed (No need to define type of data type)

// Reference type (Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Krishna",
    age: 22,
}

const myFunction= function(){
    console.log("hello world")
}

console.log(typeof null)
// above line will return object (thing to remember)


//************************************ */

// Stack and Heap
// Stack - Primitive
// Heap - Non-Primitive

let myyoutubename = "krishna.com"
let anothername = myyoutubename

anothername = "kinna.com"

console.log(myyoutubename)
console.log(anothername)

let user1 ={
    email:"user@google.com",
    upi:"abc@ybl"
}

let user2 = user1

user2.email = "kinna@google.com"

console.log(user1)
console.log(user2)
