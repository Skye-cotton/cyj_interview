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

function foo(){
    var a='小陈'
    var b=a  //变量a，b 都放在栈中
    var c={name:'呢呢'}  //引用类型会分配到堆空间
    var d=c
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
foo()