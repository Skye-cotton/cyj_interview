//ES5
function unique(arr){
    var res=arr.filter(function(item,index,array){
        return array.indexOf(item) === index
    })
    
    return res
}

console.log(unique([1,1,2,3,3,5,6]));