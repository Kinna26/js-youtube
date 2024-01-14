const user= {
    username : "krishna",
    price : 999,

    welcomeMessage  :function(){
        console.log(`${this.username}, welcome to website`)

    }

}

user.welcomeMessage()
user.username = "Kinna"
user.welcomeMessage()

//********Arrow function */

const chai = (num1,num2) => (num1 + num2) // this is how arrow functon is written

