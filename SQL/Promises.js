//  how console.log works?
//  - It is provoded by the runtime. It is the runtime features.
//  - We cannot predict how console.log works because version by version runtime improves itself.
//  - It depends on the runtime.

// Disadvantages of the callbacks :-
    // Callback hell is the callback inside callback. Code readability decreases.
    /* THe bigget disadvantage of callback is Inversion of conttrol. IOC is if there is some part of code whose control
        we are passing to someone else and we don't know how that part will be executed, this problem is called inversion of control.
    */    
        // function fun(inputString, fn)
        // {
        //     let output = inputString.split(',');
        //     for(let i = 0; i < output.length; i++){
        //         fn(output[i]);
        //         fn(output[i]);
        //     }
        // }

        // fun("Name:Ashutosh,subject:CSE", function process(ip){
        //     let arr = ip.split(":");
        //     console.log("{",arr[0],"=>", arr[1],"}");
        // });


/* Promises are the special JS objects that are also considered readability enhances.They get immediatly returned frame function setup to return a promise.
        - they act as placeholder for the data we hope to get back from some future task.
        - We also attach the functionality we want to defer until the future task is done and promise object automatically execites this functionality.

        - Promises do two things one inside JS and other outside JS.
        - 1. It sings up the process required to run in the runtime and gives a placeholder in JS, which has a value property.
*/

// function fetchCustom(url,fn)
// {
//     // It is the function that returns a content for the given url
//     console.log("Starting downloading");
//     setTimeout(function proc(){
//         console.log("Download completed");
//         let response = "Dummy data";
//         fn(response);
//         console.log("Ending the function");
//     })
// }

// fetchCustom("www.google.com", function down(response){
//     console.log("Download response is : ", response);
// })

// How promises work behind the scene?

// - The promise object we create has 4 major properties
//      1. Status
//      2. Values
//      3. on fulfillment
//      4. onReject
/*  1. Status :- Status shows current promise status.
        states are :-
        1. pending state :- overall processing yet to be completed
        2. fulfill state :- It is mean that processing done.
        3. rejected state :- It shows error
    
    2. Value :- When status pf the promise is pending this value property is undefined.
        The moment promise is resolved the value property is updated from undefined to the new(this value we can considered as the returned value/ resolved value).
        So, the value property acts like a placeholder till the time promise finishes.
    
    3. onfulfillment :- This is an array, which contains function that we attach to our promise object.
        (to a promise object we can attach some functions using .then() methode).
        When the value property is updated from undefined to new value JS gives chance to these attached function one by one with the value property as their argument(if there is no peice of code in the call stack so global code log).
*/

/* Creation of promise object.
    SYNTAX:- 
    return new Promise(function (resolve, reject){

    }) It is the promise constructor which takes callback as the parameter.

    1. TO create a promise call the promise constructor.
    2. The promise construcotr takes a callback as the argument.
    3. The callback passed inside constructor, expects argument resolve, reject.
    4. Then inside the callback write your logic.
    5. If you want to return something as success then call the resolve function with whatever value you want to return.

    When we considered a promise is fulfilled.
        1. If we call resolve function we consider it as fulfilled.
        2. We consider it rejected if we call reject function.
    
    Consuming a promise
        The promise consumption is the main beauty, uisng while we will avoid inversion of control.
        whenever we call a function, returning a promise we will get a promise object which is like any js object that we can store in a variable.

    Will JS wait here for promise to be resolved if it involve anasyn piece of code?
        -If creation of promise involves sync piece of code it will wait othewise not.
    When promise get resolved we have to execute some fucntion
*/

function fetch(url)
{
    return new Promise(function(resolve, reject){
        console.log("starting fetching from", url);
        setTimeout(function process(){
            let data = "dummy data";
            console.log("completed fetching the data");
            resolve(data);
        }, 7000)
    })
}

function writeFile(data)
{
    return new Promise(function(resolve,reject){
        console.log("Stared writing ", data, " in a file");
        setTimeout(function processWriting(){
            let filename = "result.txt";
            console.log("File written successfuly");
            resolve(filename);
        }, 3000)
    })
}

function uploadData(file, url)
{
    return new Promise(function(resolve, reject){
        console.log("Upload started on url " , url, " filename is ", file);
        setTimeout(function processUpload(){
            let result = "SUCCESS";
            console.log("Uploading done");
            resolve(result);
        }, 5000);
    });
}

// let data = fetch("www.google.com");
// let filename = writeFile(data);
// let response = uploadData(filename, "www.drive.goole.com");

/* We can use .then() function on the promise object to bind the functions we want to eexecute once we fulfill a promise 
    the .then() funciton takes function as the argument that we want to execute after promise fulfills and the argument function 
    takes valur property as the
*/

// let downloadPromise = fetch("www.googel.com");
// downloadPromise
// .then(function processDownload(value){
//     console.log("Star downloading");
//     console.log(value);
//     let writePromise = writeFile(value);
//     writePromise.then(function processWriting(value){
//         console.log("writing done");
//         console.log("filename is", value);
//     })
// }) // this function also causes the callback hell.

// .then also return a new promise.

let downloadPromise = fetch("www.google.com");
 downloadPromise
.then(function processDownload(value){
    console.log("downloding done with following value" , value);
    return value;
})
.then(function processWrite(value){
    console.log
    return writeFile(value);
})
.then(function processUpload(value){
    return uploadData(value, "www.twitter.com");
});