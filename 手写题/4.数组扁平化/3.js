//ES6 实现
function flatten(arr){
    while(arr.some(item=>Array.isArray(item))){
        arr=[].concat(...arr)
        console.log(arr);
    }
    return arr
}

console.log(flatten([1, [2, [3]]]));