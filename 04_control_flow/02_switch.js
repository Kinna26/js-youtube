/*switch (key) {
    case value:
        
        break;

    default:
        break;
}h*/

const month = 3

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;

    default:
        break;
}


const userEmail = "k@krishna.ai"

if (userEmail) {
    console.log("Got user email")
}else{
    console.log("user don't have email")
}

/* falsy value
false,0,-0,BigIn 0n, null,"",undefined,NaN
    truthy value
"0",'false'," ",[],{},function(){}<--empty function
*/

// dertection of empty array and object

const Emptyarry = []

if(Emptyarry.length === 0){
    console.log("Empty Array")
}

const EmptyObj = {}

if(Object.keys(EmptyObj).length === 0){
    console.log("object is empty")
}

// Nullish Coalescing Operator (??) null undefined
// Terniary operator(condition ? :)

const iceteaprice = 100

iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80")