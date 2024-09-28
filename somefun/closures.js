//  Closures is when a function remebers it's lexical scope even when the function is executed outside that lexical scope. 
const add = (function exec(){
    let counter = 0;
    return  function process()
    {
        counter += 1;
        return counter
    }
})(); // the above function is an iife. 

console.log(add());
console.log(add());
console.log(add()); 