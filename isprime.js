function isPrime(x)
{
    for(let i = 2; i <= x - 1; i++)
    {
        if(x % i == 0) return false;
    }
    return true;
}

let x = 10;
if(isPrime(x)) console.log("The is prime");
else console.log("The number is not prime")