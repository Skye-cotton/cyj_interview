//简单数据类型，只能被替换 不能被修改

// var str = 'I am hero'
// console.log(str.toUpperCase())
// console.log(str)

//immutable  不变的
// const str = 'I am hero'
// str=str.toUpperCase()
// console.log(str)


const a=5
function A(b){
    //不纯 
    //会不会产生副作用  
    // a++;//会被修改
    return a+b
}


console.log(A(5))