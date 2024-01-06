// array- datatype in which we put different values, they are resizable in javascript

const myArr = [0,1,2,3,4,5]
console.log(myArr[2])

const myHeroes = ["Iron man","Thor"]
const myArr2 = new Array(1,2,3,4,5,6,7)

console.log(myArr, myHeroes)
console.log(myArr2)

console.log("NExt lines will be of Array methods")

// Array methods

myArr.push(6) // add value in last position of array
console.log(myArr)

myArr.pop() // remove the last value of array 
console.log(myArr)

myArr.unshift(9) // add value at the start, but it will have to much time to run because every element have to shift
console.log(myArr)

myArr.shift() // remove value at start
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(3))

const newArr = myArr.join() // converts the array in string and join them
console.log(newArr)

// slice and splice

console.log("A",myArr)
const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3) // splice makes changes in original array
console.log("C",myn2) 
console.log(myArr)
