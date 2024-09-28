function fun(){
    console.log("fun called")
}

function gun(fn)
{
    console.log("Inside gun");
    fn();
    console.log("Leaving gun");
}
gun(function fun(){
    console.log("Ashutosh Dwivedi")
})

/* Types of the funtion expression
    1. Anonymous :- which do not have the name
    2. Named :- which has the name.

    Example of Anonymous function

            var x = function (){
                // Implementation
            }
            
            gun(function ()
            {
                // Implement
            })
        Anonymous functions are hard to debug.
        Recursion is also tricky here.
    
    Scope of a function expression
    */
