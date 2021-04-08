function Person2(){
    this.name='parent2'
    this.play=[1,2,3]
}
function Child2(){
    this.type='child2'
}
Child2.prototype=new Person2()

var a=new Child2()
console.log(a.play);

//有一个问题 创建多个实例，改变其中一个实例，其他的也会改变，因为是指向同一个原型
