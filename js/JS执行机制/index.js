// showName()
// console.log(myname);
// var myname='队长'
// function showName(){
//     console.log('篮球队队长');
// }
//函数声明，整体提升。变量声明，声明提升
//打印结果：篮球队队长   undefined


// var a=2
// function add(){
//     var b=10
//     return a+b
// }

// add()

//执行上下文，通过栈来管理 

// var a = 2
// function add(b,c){
//   return b+c
// }
// function addAll(b,c){
// var d = 10
// result = add(b,c)
// return  a+result+d
// }
// addAll(3,6)

// function bar(){
//     console.log(myName);
// }

// function foo(){
//     var myName='玉珏'
//     bar()
// }

// var myName='陈玉珏'
// foo()//陈玉珏

function bar() {
    var myName = '嘉新'
    let test1 = 100
    {
        let test =123
    }
    if (1) {
      let myName = 'chrome浏览器'
      console.log(test);
    } 
  }
  
  function foo() {
    var myName = '王嘉新'
    let test = 2
    {
      let test = 3
      bar()
    }
  }
  
  var myName = '队长'
  let myAge = 10
  let test = 1
  foo()
  
  

