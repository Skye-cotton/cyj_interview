//symbol
//ES6 引入的新的原始数据类型Symbol，表示独一无二的值
// var sym1= Symbol();
// var sym2= Symbol('foo');//惟一的
// var sym3= Symbol('foo');
// console.log(sym2 == sym3);
// console.log(typeof sym1);//symbol
// 1. 函数来创建，原始数据类型 冲突的地方？如何说明  函数用法上有什么区别
// new Symbol()//不能被new Symbol is not a constructor
// 变量都是要分配内存空间的，原始数据类型 栈分配
// 引用类型 堆
// Symbol(字符串)  有何用？ 做一个标识
// console.log(sym3.toString());
// 2. Symbol  有何用？

// var mySymbol = Symbol() // 初始化
// // var shapeType = { // 形状的类型  json object 
// //   triangle: 'Triangle', // 三角形
// //   square: 'Square' // 正方形
// // }
// //精神大条一些，甚至不用给值
// var shapeType = { // 形状的类型  json object 
//     triangle: Symbol(), // 三角形
//     square: Symbol() // 正方形
//   }
// function getArea(shape, options) {
//   var area = 0;
//   switch(shape) {
//     case shapeType.triangle:
//       area = 0.5 * options.width *options.height;
//     break;
//     case shapeType.square:
//       area = options.width * options.height;
//     break;
//   }
//   return area;
// }
// console.log(getArea(shapeType.triangle, {
//   width: 100,
//   height: 100
// }))

// var s1 = Symbol('foo')
// console.log(s instanceof Symbol); //原始数据类型

// const obj={
//     toString(){//覆盖Object.prototype.toString()
//         return 'abc'
//     }
// }
// const sym= Symbol(obj);
// console.log(sym.toString());

// var sym=Symbol("My symbol")
// console.log("your symbol is"+ sym);//Symbol 不能字符串拼接Cannot convert a Symbol value to a string

//symbol 可以用于json key 表示唯一
//Symbol 作为json key 第二种引用场景
var obj={}
var a=Symbol()//可以用于JSON object key
var b=Symbol()

obj[a]='Hello'
obj[b]='world'
obj.cc='cc'//常规 取个名字

 console.log(Object.keys(obj));

//  console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
 console.log(obj[a]);
 for(let key in obj){
     console.log(obj[key]);
 }

 Object.getOwnPropertySymbols(obj).forEach(item=>{
     console.log(obj[item]);
 })