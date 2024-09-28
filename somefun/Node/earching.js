function linearsearch(arr, r){
     for(let i = 0; i < arr.length; i++){
        if(arr[i] === r) return i;
        return NaN;
     }
}


module.exports = {
   linear:linearsearch
}