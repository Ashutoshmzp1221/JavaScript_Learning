//  Now the error handling in the js is done by using the throw keywords.
/*  
    We use the throw keyword use to give the throw object.
    .then excepts two function
    syntax
    .then(fucntion success(value){}, function err(err){})
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

let x = fetch("www.google.com")

x.then(function success(value){
    console.log("value is ", value);
}, function err(err){
    console.log("error is ", err);
})
.catch(function errorhandle(err){
    console.log("value ", err);
})

//  we can also use the try catch in the js. we can do it in the async await put the code of the await in try and catch to handle it.

// error first callback is a coding style in which we pass first argument of the callback is the error.

function t(url, fn){
    console.log("Start downloading from ", url);
    setTimeout(function process(){
        console.log("Download completed");
        let res = "Dummy Data";
        fn(undefined, res);
    }, 3000);
}

t("www.google.com", function(err, res){
    if(err) {
        console.log("error is ", err);
        return;
    }
    console.log("respose is ", res);
})

