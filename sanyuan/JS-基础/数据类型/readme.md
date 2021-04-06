# 数据类型之概念篇
1.JS原始数据类型有哪些？引用数据类型有哪些？
原始数据类型：String Number Boolean Null undefined Symbol
引用数据类型：对象Object(包括：普通对象-Object,数组对象-Array，正则对象 RegExp,日期对象-Date 数学函数-Math，函数对象-Function)
3.null是对象吗？为什么？不是。TypeOf 中会返回Object是一个BUG。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象然而 null 表示为全零，所以将它错误的判断为 object 。
4.'1'.toString()为什么可以调用？
做了以下事情：
```
var s=new String('1')
s.toString()
s=null
```
5.0.1+0.2为什么不等于0.3？
在转化成二进制后，会无限循环，由于标准位数的限制，后面的会被截取，从而产生精度损失。

# 数据类型之检测篇
1. typeof 是否能正确判断类型？
原始数据类型中，除了null都可以使用 typeof 显示正确的类型
但引用类型，除了function 之外，都会显示object。
- 采用InstanceOf会更好，原理是基于原型链的查找，只要处于原型链中，判断永远为true。
2. instanceof能否判断基本数据类型？能
Symbol.hasInstance:判断某对象是某构造器的实例，可以实现自定义instanceof行为
```
class PrimitiveNumber {
    static [Symbol.hasInstance](x){
        return typeof x ==='number'
    }
}
console.log(123 instanceof PromitiveNumber)
```
3. 能不能手动实现一下instanceof的功能？
```
function myInstanceof(left,right){
    if(left==null||typeof left !== 'object'){return false}
    let proto=Object.getPrototypeOf(left)
    while(true){
        if(proto==null){return false}
        if(proto==right.prototype){return true}
        proto=Object.getPrototypeOf(proto)
    }
}
```
4. Object.is和===的区别？
Object在严格等于的基础上修复了一些特殊情况的失误，比如：+0和-0，NaN和NaN

# 数据类型之检测篇
1. [] == ![]结果是什么？为什么？true
首先都将转化为数值比较，数组空[]等于0，根据优先级，！等于false 等于0 ；所有0=0 => true
2. JS中类型转换有哪几种？
转换成字符串，
转换成数组，
转换成布尔值
3. == 和 ===有什么区别？
== ：值相等
===：值相等，类型也要相等
4. 对象转原始类型是根据什么流程运行的？
    1. 如果Symbol.toPrimitive()方法，优先调用再返回
    2. 调用valueOf()，如果转换为原始类型，则返回
    3. 调用toString()，如果转换为原始类型，则返回
    4. 如果都没有返回原始类型，会报错
5. 如何让if(a == 1 && a == 2)条件成立？
```
var a={
    value:0,
    valueOf:function(){
        this.value++
        return this.value
    }
}
```