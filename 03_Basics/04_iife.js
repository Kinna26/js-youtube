// Immediately invoked function expression

(function chai(){
    console.log(`DB CONNECTED`)
})(); // this is a named IIFE

((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('krishna');

