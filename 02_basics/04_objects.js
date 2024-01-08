const tinderUser = new Object() // Singleton Object
const tinderUser2 = {} // not a singleton object (literal)

//console.log(tinderUser)
//console.log(tinderUser2)

// both gives the same value empty object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedin = false

console.log(tinderUser)

const regularUSer = {
    email : "kinna@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Krishna",
            lastname : "Parihar"
        }

    }
}

console.log(regularUSer.fullname.userfullname)

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "c"}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

const obj4 = {...obj1, ...obj2}
console.log(obj4)

const User = [
    {
        id : "123",
        email : "kinna@gmail.com"
    },
    {
        id : "124",
        email : "krishna.gmail.com"
    },
    {

    }

]

User[1].email // this is use to extract the 
console.log(tinderUser)

console.log(Object.keys(tinderUser)) // to extract the all the keys of the object, this keys are stored in a array
console.log(Object.values(tinderUser)) // to extract the all the values of the object, this values are stored in a array

console.log(tinderUser.hasOwnProperty('isLoggedin')) // to check, is the object has mentioned key

/**********De-structuring****** */

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

const {courseInstructor : instructor} = course // object destructure
console.log(instructor)

{
    "name" : "krishna",
    "coursename" : "js in hindi",
    "prize" : "free"
}