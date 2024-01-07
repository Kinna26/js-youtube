// singleton

// object literals

const MySym = Symbol("key1")

const JsUser = {
        name : "Krishna",
        "full name" : "Krishna Parihar",
        age : 22,
        [MySym] : "key1", // this how we define a symbol in objects key
        location : "Bengaluru",
        email : "kinna@google.com",
        isLoggedIn : false,
        lastLoginDays : ["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[MySym])

JsUser.email = "kinna@chatgpt.com"

//Object.freeze(JsUser) // to freeze the object no one can make chnages in the object

JsUser.email = "kinna@microsoft.com"
console.log(JsUser["email"])
console.log(JsUser)

JsUser.College = "NIT Bhopal"
console.log(JsUser["College"])

JsUser.greeting = function(){
    console.log("hello Js User")
}

console.log(JsUser.greeting)
console.log(JsUser.greeting())

JsUser.greeting2 = function(){
    console.log(`Hello Js User ${this.name}`)
}

console.log(JsUser.greeting2())