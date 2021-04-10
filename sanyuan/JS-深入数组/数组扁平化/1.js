let ary = [1, [2, [3, [4, 5]]], 6];
let str=JSON.stringify(ary)
 ary=ary.flat(Infinity)
 console.log(ary);