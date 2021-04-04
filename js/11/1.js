const arr = [3,4,5];
// 给出在数组尾部/头部 加、删除的方法
arr.push(6);
 console.log(arr.pop());
arr.unshift(1) //   头部插入
 arr.shift(1)   //      头部删除

 // 把数组打印出来，有多少种方法
 for(let num in arr){
     console.log(num);
 }
 arr.forEach(item =>{
     console.log(item);
 })
console.log(arr.join(" "));//join() 方法用于把数组中的所有元素放入一个字符串。
console.log(arr.splice(0,arr.length));
console.log(arr.map(item => item));