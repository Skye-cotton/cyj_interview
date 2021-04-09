let nums=[1,5,3]

//将a b 比较

console.log(
    nums.sort(function(a,b){
    if(a>b) return 1
    else if(a<b)return -1
    else if(a==b) return 0
})
);