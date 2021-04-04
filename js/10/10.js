//有哪些情况会是undefined?

//1.声明了，没有赋值
let a ;
// 变量声明时，JS类型由值来决定        1
console.log(typeof a);
// 2.函数没有返回值
const fnNoReturn = () =>{}
console.log('2.'+fnNoReturn);
// 3.参数不传值
const fn = function(b){
    //一运行就会有的 this ->指针对象 指向一个对象          3
    console.log(arguments);
    console.log(typeof b);
}
console.log(fn(1,2,3));
//4.
const o = {c:'1'};
console.log(o.d,'4');// undefined
console.log(cds);//语法错误

console.log(null == undefined);//true
console.log(null === undefined);//false
