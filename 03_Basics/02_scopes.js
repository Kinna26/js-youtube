let a = 300

if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log("inner",a)
}

console.log(a) // here a = 300 will print because a=10 is inside the scope and it does not come out.
//console.log(b)
//console.log(c) // here c=30 will print because var is used and it does on work with scope concept.

// by using the let or const the value does not go outside of the scope.

function one(){
    const username="krishna"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website) it will show error because function one will not take anything from function two

    two()
}

one()

///++++++ interesting +++++++++
console.log(addone(5)) // it will run 

function addone(num){
    return num + 1
}


console.log(addTwo(5)) // it will not run

const addTwo = function(num){
    return num + 2
}

// when we declare function without using variable the function will succefully call
// but when we we use variable it will show error