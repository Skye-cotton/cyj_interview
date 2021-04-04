//定义 Promise 题目     蚂蚁金服面试题
const delay = (ms) => new Promise((resolve) =>setTimeout(resolve,ms))
- Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。
二维数组变一维数组


1. 递归的高级套路
    数组的length + shift 操作
    run 只要调用这一个API 就可以
    区分flow 跟普通函数、delay标志isFlow:true
    slice
    flat