//经典题
for(var i = 1; i <= 5; i ++){
    setTimeout(function timer(){
      console.log(i)
    }, 0)
  }

//1.立即执行函数
for(var i = 1; i <= 5; i ++){
    (function(j){
    setTimeout(function timer(){
      console.log(j)
    }, 0)})(i)
  }
// 2.给定时器传入第三个参数
for(var i = 1; i <= 5; i ++){
    setTimeout(function timer(j){
      console.log(j)
    }, 0,i)
  }
//块级作用域 let
for(let i = 1; i <= 5; i ++){
    setTimeout(function timer(){
      console.log(i)
    }, 0)
  }