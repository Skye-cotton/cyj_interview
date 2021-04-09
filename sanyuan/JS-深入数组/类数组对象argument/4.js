function sum(a,b){
    let args=Array.prototype.concat.apply([],arguments)//apply 会将第二个参数自动展开
    console.log(args.reduce((a,b)=>a+b));
}
sum(1,2)