var quicksort = function (arr){
    if(arr<2){return arr}
    var pIndex=Math.floor(arr.length/2)
    var p=arr.splice(pIndex,1)[0]
    var left=[]
    var right =[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<p){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quicksort(left).concat([p],quicksort(right))
}
console.log(quicksort([1,5,3,6,9,33,5,76])) 