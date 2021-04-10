let ary = [1, [2, [3, [4, 5]]], 6];// -> [1, 2, 3, 4, 5, 6]
let str = JSON.stringify(ary);
ary=str.replace(/(\[|\])/g, '').split(',')
console.log(ary);