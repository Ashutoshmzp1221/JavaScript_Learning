function evenodd( i)
{
    if(i % 2 == 0)
    {
        return "Even";
    }
    else{
        return "Odd";
    }
}

for(let i = 1; i <= 50; i++)
{
    console.log(i ,"is ",evenodd(i));
}