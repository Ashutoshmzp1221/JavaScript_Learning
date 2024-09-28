// console.log("Start of the file")
// setTimeout(function timer(){
//     console.log("Timer is 1 done");
// },0)

// for(let i = 0; i < 10000000000; i++)
// {

// }

// let x = Promise.resolve("Ashutosh's Promise");
// x.then(function processPromise(value){
//     console.log("Whose promise ? ", value);
// });

// setTimeout(function timer2(){
//     console.log("Timer 2 done");
// }, 0);
// console.log("End of the file");

/* Micro task queue has higher priority 
    Promise - callbacks - microtask queue.
    normal callbacks - event queue
     
*/

/* we can declare a function async. if we declare a function async it does following
    1. it allow the use of the await keyword.
    2. it also allow us to consume promise using await.
    3. an aync funciton always converts your return value to a promise.
*/

function fetch(url)
{
    return new Promise(function(resolve,reject){
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

async function processing(){
    let downloasdedData = await fetch('www.google.com');
    let file = await writeFile(downloasdedData);
    let uploadResponse = await uploadData(file, 'www.drive.com')
}
console.log("Start");
processing();
console.log("End"); 

//  await keyword also returns a promise just like the .then()