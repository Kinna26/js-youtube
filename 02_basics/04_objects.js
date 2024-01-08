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
        firstname
    }
}