function sum(a,b){
    let args=Array.prototype.slice.call(arguments)
    //调用Array中的slice属性，读取传进来的参数赋值给args
    console.log(args);//[ 1, 2, 3 ]
    console.log(args.reduce((sum,cur)=>sum+cur));//6
}
sum(1,2,3)