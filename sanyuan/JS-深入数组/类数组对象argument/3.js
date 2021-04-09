function sum(a,b){
    let args=[...arguments]
    console.log(args.reduce((sum,cur)=>sum+cur));//转化成数组可以调用原生方法
}
sum(1,2)