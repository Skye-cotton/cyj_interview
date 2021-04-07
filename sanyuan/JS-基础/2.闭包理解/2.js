// var a=1
// function f1(){
//     var a=2
//     function f2(){
        
//         console.log(a);
//     }
//     return f2
// }
// var x=f1()
// x()
// var f3;
// function f1(){
//     var a=2
//     f3=function(){
//         console.log(a);
//     }
// }
// f1()
// f3()
var a=1
function foo(){
    var a=2
    function baz(){
        console.log(a);
    }
    bar(baz)
}
function bar(fn){
    //这就是闭包
    fn()
}
foo()//  2