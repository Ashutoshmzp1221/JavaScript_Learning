// using http module (inbuit given by node) we can setup a basic server

const http = require('http');
const PORT = 3000;
/* 
    * http module contains a function createServer.
    * this createServer function takes a callback as the input.
    * Now inside the callback, we get two argument.
        - request :- this argumetn contains all the details about the incoming request.
        - response :- this argumetn contains the function using which we can prepare the response.

    * THe createServer function return us the server object.
*/

const server = http.createServer(function exec(request, response){
    if(request.url == '/home'){
        response.end("Welcome to home");
    }else if(request.url == '/faq'){
        response.end("List Of FAQs");
    }else{
        response.end("Hello World");
    }
});

server.listen(PORT, function process(){
    // once the server has started this callback will be executed.
    console.log("Server started on port", PORT);
})

