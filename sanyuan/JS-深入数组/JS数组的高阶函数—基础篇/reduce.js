let nums=[1,2,3]
//多个数的和
let newNums=nums.reduce(function(preSum,curVal,array){
    return preSum+curVal
},2)
console.log(newNums);//8