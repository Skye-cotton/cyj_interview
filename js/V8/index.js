// function foo(){
//    var a=1
//    var b=a
//    a=2
//    console.log(a); 
//    console.log(b); 
// }
// foo()

// function bar(){
//     var a={name:'小陈'}
//     var b=a
//     a.name='呢呢'
//     console.log(a); 
//     console.log(b); 
//  }
//  bar()

//  var baz
//  baz=12
//  baz='abc'
//  baz=true

// function foo(){
//     var a='小陈'
//     var b=a  //变量a，b 都放在栈中
//     var c={name:'呢呢'}  //引用类型会分配到堆空间
//     var d=c
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }
// foo()

//闭包
// function foo(){
//     var myName='小陈'
//     let test1=1
//     const test2=2
//     var innerBar={
//         setName:function(newName){
//             myName=newName
//         },
//         getName:function(){
//             console.log(test1);
//             return myName
//         }
//     }
//     return innerBar
// }
// var bar=foo()
// bar.setName('呢呢')
// bar.getName()
// console.log(bar.getName());

function foo(){
    var a=1
    var b={name:'小陈'}
    function showname(){
        var c=2
        var d={name:'呢呢'}
    }
    showname()
}
foo()
