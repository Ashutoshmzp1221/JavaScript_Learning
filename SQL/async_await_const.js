function fun(){
    return new Promise(function(resolve,reject){
        setTimeout(function process(){
            console.log("Promise resolved");
            resolve(123);
        },7000);
    })
}

let x = fun();
x
.then(function exe(value){
    console.log("value is ", value);
    // return 100;
}) // here the .then() function is chain up to the promise object return by the previous .then() funciton
.then(function pre(value){
    console.log("Now the value is ", value);
})

// If we want to chain up the above then with the x promise object then we have to do the following.

x.then(function exc1(value){
    console.log("The value of the second promise is ", value);
    return 1000;
})