function Animal(name){
    this.name=name
    this.getName=function(){
        return this.name
    }
}
function Dog(name){
    Animal.call(this,name)//用call调用Animal里面的参数，从而实现继承
}
Dog.prototype=new Animal()