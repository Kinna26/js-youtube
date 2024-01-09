function sayMyName(){
    console.log("My name is Krishna")
}

//sayMyName()

//function addTwoNumbers(number1, number2){
  //  console.log(number1 + number2)
//}

//addTwoNumbers(3,4)

function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(3,4)
console.log(result)


function loginUserMessage(username){
    if(username=== undefined){
    console.log("please enter a username")
    return
    }
    else{
    return `${username} just logged in`
    }
}

console.log(loginUserMessage())
console.log(loginUserMessage("Krishna"))

