//考点：JS中类型转换 
// 只有三种  转换成数字
//          转换成布尔值
//          转换成字符串
// 隐式类型转换
// 显示类型转换

let obj = {name: 'obj'}; // 引用类型
console.log(obj.toString()); // [object Object]  || null
// console.log(typeof null);
console.log(Object.prototype.toString.call(null));

// 不可运行，'1' 简单数据类型  toString()  新手
// 1. 谁的 prototype? String 引用类型？ 不，String是简单类型  转换
//包装类型 区别于引用类型
//   JS 提供了Number  String BOOlean  包装类型  短暂的
//   为了方便  "abc".split('a')
// // 字符串  对象
// console.log('1'.toString());  //可执行吗？为什么？
//Symbol BigInt  不能被包装
console.log('1'.toString()); //执行瞬间 
//立即
// var s = new Object("1")  //类型转换
// console.log(s);
// console.log(s.toString());
// s=null  //清空  ?
var s1 = "some text"
console.log(typeof s1);
console.log(s1.toString());//暂时的
s1.color="read"//对象，动态给对象设置属性
console.log(s1.color);//undefined