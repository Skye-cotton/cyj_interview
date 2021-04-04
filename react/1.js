//writer 全局
let writer = {
    firstName:"yujue",
    lastName:"chen",
    num:10
}
//函数有什么问题

function appendCompany(obj){
    let copyWriter = Object.assign({},obj)
    //修改了全局对象   
    copyWriter.company='字节'  //函数内部
    return copyWriter
}

console.log(appendCompany(writer))
  if(!writer.company){
    console.log('还在学校上课')
}
console.log(writer)

//reducer  要避免的， 纯函数