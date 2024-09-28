export function linearsearch(arr, r){
    for(let i = 0; i < arr.length; i++){
       if(arr[i] === r) return i;
       return NaN;
    }
}

/* There are two types of exporting in es moduling.
    1. named export.
    2. default export.
*/
// 1. named export 
// export{
//     linearsearch 
// }

// 2. default export

export default function fun()
{
    console.log("default export");
}