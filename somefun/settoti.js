// setTimeout(taskCallback , time_in_milliseconds) :- it is used to execute any task after some interval at once.
//    # it returns a unique id ;
//  for stoping clearTimeout(id);

let id1 = setTimeout(function execute()
{
    console.log("task completed")
}, 7000);


// setInterval(taskcallback, time_inteval_in_milliseconds) :- it also returns the unique id
// for stoping clearInterval(id); 

let d = setInterval(function(){
    console.log("Interval");
}, 3000);

setTimeout(function()
{
    clearInterval(d);
}, 13000);
