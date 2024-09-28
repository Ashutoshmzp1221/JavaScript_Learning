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
let downloadPromise = fetch("www.google.com");
let writePromise = writeFile("dummy data");
let uploadPromise = uploadData("test.txt", "drive.goolge.com");
console.log("start");

Promise.all([downloadPromise, writePromise, uploadPromise]).then(function process(value){
    console.log("Done");
})

// the promise.all() funtion is use to consume all the promise in one go and it return the array of the promises.
// the promise.any() function is use to consume the only one promise as soon as it get resolved.

