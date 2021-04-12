// var ary = [1, [2, [3, [4, 5]]], 6];// -> [1, 2, 3, 4, 5, 6]
// let str = JSON.stringify(ary);
let result=[]

let fn=function(ary){
    
    for(let i=0;i < ary.length;i++){
        let item=ary[i]
        if(Array.isArray(ary[i])){
            fn(item)
        }else{
            result.push(item)
        }
    }
}
fn([1, [2, [3, [4, 5]]], 6])
console.log(result);