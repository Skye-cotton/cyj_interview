function sum(a,b){
    let args=Array.from(arguments)
    console.log(args);
    console.log(args.reduce((a,b)=>a+b));
}
sum(1,2)