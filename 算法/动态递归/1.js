var coinChange = function(coins, amount) {
    const MAX =10001
    let dp=Array(amount+1).fill(MAX)
    dp[0]=0
    for(let j=0;j<coins.length;j++){
        for(let i=coins[j];i<=amount;i++){
            dp[i]=Math.min(dp[i],dp[i-coins[j]]+1)
        }
    }
    if(dp[amount]==MAX){
        return -1
    }
    return dp[amount]
};