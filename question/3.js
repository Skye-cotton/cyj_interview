var a = 0xa  //16进制
console.log(typeof a);
var b=010;//0开头  8进制
var c=0b01;//2进制
console.log(c+3);//十进制数
console.log(b+19);

//0.30000000000000004
// JS 浮点数不精确 0.3
// JS  没有浮点数类型 Number new Number()  不适合计算
// JS 转成二进制的时候 无限的循环  32 舍弃一些位
// 底层是二进制的相加  不准确
console.log(0.1 + 0.2);
console.log((8).toString(8));
console.log((0.1).toString(2)); // toString 传进制数
console.log((0.2).toString(2));

console.log(Number.parseInt('010',8));//8
console.log(Number.parseInt('20',2));// 结果  NaN

//跟什么相关？  上溢  大数字 BigInt
// JS  Number 类型只能安全地表达 -9007199254740991(-2(^53-1))
console.log(99999999999999999999);//100000000000000000000
console.log(99999999999999999999n);//99999999999999999999n
console.log(9007199254740992 === 9007199254740993);//true 不安全
console.log(9007199254740992n === 9007199254740993n);//false
console.log(10 + 10n);//报错