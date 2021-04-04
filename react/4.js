let writer = {
    firstName:"yujue",
    lastName:"chen",
    num:10
}
if(!writer.company){
    console.log('还在学校上课')
}
//当我们需要给writer对象一个方法
function appendCompany(){
    writer.company='字节'
}
appendCompany()
console.log(writer)