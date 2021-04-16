function getNum() {
    var nums36 = []
    for (var i = 0; i < 36; i++) {
        if (i >= 0 && i <= 9) {
            nums36.push(i)
        } else {
            nums36.push(String.fromCharCode(i + 87))//通过Unicode 值显示字符串  97 是 a
        }
    }
    //    console.log(nums36); 测试用例：打印 [0-9 a-z]
    return nums36
}

function base36(n) {
    // 首先我们要实现一个放入 0-9 a-z 的一个函数
    var arr = []  //结果放进数组中
    var nums = getNum()
    while (n) {
        var res = n % 36  //每一次除余的res就是nums36数组 的下标
        // console.log(res);
        arr.unshift(nums[res]) //unshift 是把值放入下标为0的位置（即放入头部，而不是尾部），和我们进位的思想刚好一致
        // console.log(arr,'+++++++++');
        n = parseInt(n / 36)
        // console.log(n,'-----------');
    }
    return arr.toString().split(',').join('')
}
console.log(base36(47)); //10
console.log(base36(1409980009869));// hzqhoyh9
