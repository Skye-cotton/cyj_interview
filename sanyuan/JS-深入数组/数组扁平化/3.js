let ary = [1, [2, [3, [4, 5]]], 6];// -> [1, 2, 3, 4, 5, 6]
let str = JSON.stringify(ary);
str=str.replace(/(\[|\])/g,'')
str='['+str+']'
ary=JSON.parse(str)
console.log(ary);