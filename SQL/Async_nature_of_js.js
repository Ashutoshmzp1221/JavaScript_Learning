// - Javascript is a single threaded language.

// - Javascript by default only supports synchronous code execution(The code is executed line by line that means another line of code will execute if and only if current line execute completely no matter how much time it takes).

// - The above property of sync code execution only works for operation natively known to javascript.

// JAVA SCRIPT RUNTIME

// Runtime provides the safe environment to the js.

// Browser provide runtime it gaves the DOM API.

// - setTimeout is provided by the browser and a lot of DOM based function.

// - Before 2009 js only runs in the browser.

// - Ryan Dahl he tried to do js out of the browser environment and put it in new runtime that is called as the  node.

// - Now we know that runtime also provides functionalities that can be levereged by js.
// But how js handles them?

// function process()
// {
//     console.log("start");
//     setTimeout(function exect()
//     {
//     console.log("Execute some task");

//     }, 3000);
//     for(let i = 0; i < 1000000000; i++){

//     }
//     console.log("End");
// }

// process();

// We can easily do task that take a lot of time to complete without blocking the code flow?

//  Apart from the call stack js provide two more things that is the event loop and event queue.
//  Event loop is the infinite loop that checks the coditions always.
//  The condition to start the executing taks from event queue is that
//      1. The call stack should be empty i.e. no function in the call stack is left to execute.
//      2. The global code is also done.



const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

const rem = num1 % num2;
const ans = num1 / num2;
console.log(`The remender is ${rem} and the quetient is ${ans}`);