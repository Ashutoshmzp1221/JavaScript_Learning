function grid(n)
{
    for(let i = 0; i < n; i++)
    {
        let p = "";
        for(let j = 0; j < n; j++)
        {
            p += "*"
        }
        console.log(p);
    }
}

function grid1(n)
{
    for(let i = 0; i < n; i++)
    {
        let str = "";
        for(let j = 0; j < i; j++)
        {
            str += "*";
        }
        console.log(str);
    }
}

function grid2(n)
{
    for(let i = 1; i <= n; i++)
    {
        let str = "";
        for(let j = 1; j <= n; j++)
        {

            if(j <= n -i) str += " ";
            else str += "*"
        }
        console.log(str);
    }
}

function grid3(n)
{
    let c = n;
    for(let i = 1; i <= n; i++)
    {
        let str = "";
        for(let j = 1; j <= c; j++)
        {
            if(j <= n -i) str += " ";
            else str += "*"
        }
        c++;
        console.log(str)
    }
}

function grid4(n)
{
    let c = n;
    for(let i = 1; i <= n; i++)
    {
        let str = "";
        for(let j = 1; j <= c; j++)
        {
            if(j <= n -i) str += " ";
            else str += "*"
        }
        c++;
        console.log(str)
    }
    c = c -2
    for(let i = n - 1; i > 0; i--)
    {
        let str = "";
        for(let j = 1; j <= c; j++)
        {
            if(j <= n -i) str += " ";
            else str += "*"
        }
        c--;
        console.log(str);
    }
}

function butter(n)
{
    for(let i = 1; i <= n/2 + 1; i++)
    {
        let str = "";
        for(let j = 1; j <= n; j++)
        {
            if(j > i && j <= n - i) str += " ";
            else str += "*"
        }
        console.log(str);
    }
    for(let i = (n-1)/2; i > 0; i--)
    {
        let str = "";
        for(let j = 1; j <= n; j++)
        {
            if(j > i && j <= n - i) str += " ";
            else str += "*";
        }
        console.log(str);
    }
}
// grid2(10)
butter(7)
grid4(10)