// console.log(process);
// console.log(__dirname);
 /* It gives the access to the current directory in which we are working. This global is not always accessible. 
    REPL(Read Execute Print Loop).

*/
// import earching from './earching.js';
// import searching from earching
const searching = require('./earching.js')
// console.log(module);
let arr = [4,1,23,8,9,7,2,52];
let x = 2 ;
console.log(searching.linear(arr,x));
/* Module Patern in javascript.
    module global is an expose obect which have a lot of properties.
    there are two type of the module pattern we have in javascript.
        1. common js module. :- here we use the require global(it helps to consume the module). this is the old way.
        2. ES module. :- here we use the import instead of require and the file should be used with the extension .njs.
*/

/* 
    package :- It is a folder which contains a package.json file.
    JSON :- javascript object notations.
*/

