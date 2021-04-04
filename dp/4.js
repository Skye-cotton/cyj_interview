const coinChange =function(coins,amout){
    //用于保存每个目标总额对应的最小硬币个数
    const f=[]
    f[0]=0
    for(let i=1;i<=amout;i++){
        f[i]=Infinity
        //上一次的金额+1 比较
        //遍历每个可用硬币的面额
        for(let j=0;j<coins.length;j++){
            if(i-coins[j] >= 0){//可以成这个金额
                f[i]=Math.min(f[i],f[i-coins[j]]+1)
            }
        }
    }
    if(f[amout]===Infinity){
        return -1
    }
    return f[amout]
}
console.log(coinChange([1,2,5],11))