const climbStairs = function(n){
    // n=1 return 1
    // n=2 return 2
    const f=[]
    f[1]=1
    f[2]=2
    for(let i=3;i<=n;i++){
        f[i]=f[i-1]+f[i-2]
    }
    return f[n]
}
console.log(climbStairs(99))