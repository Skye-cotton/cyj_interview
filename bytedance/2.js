//不要追求完美，上岸就好
//写好类似LeetCode 函数，测试用例，用例结果
// 提供36位的表达0-9a-z
function getNums36(){
    var nums36=[];
    for(var i=0;i<36;i++){
        if(i>=0 && i<=9){
            nums36.push(i)
        }else{
            nums36.push(String.fromCharCode(i+87))
        }
    }
    console.log(nums36,'---------');
    return nums36
}
function scale36(n){
    //单独的功能函数 
    // 36 进制数  0-9 a-z 
    const arr=[]
    var nums36=getNums36()
    while(n){
        var res=n%36
        console.log(res,'+++++++');
        arr.unshift(nums36[res]) //在数组的开头添加一个元素，并返回新的长度
        console.log(arr);
        //进位
        n=parseInt(n/36)  //每次都要跟新n
        console.log(n,'-----');
    }
    return arr.toString()
}

console.log(scale36(1409980009869)); //10