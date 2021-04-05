

// 三种状态 Promise 类
class Promise{
    constructor(executor){
        // 1. executor 意义？回调函数，执行器 立即执行
        // 
        // 2. resolve 应该是一个函数
        //3. 状态只能从一个状态到另一个状态
        // playload 固定格式  执行结果
        // error 报错信息
        //很严谨的状态转移机制
        let resolve=(data)=>{};
        let reject=()=>{};
        executor(resolve,reject);
    }
}

new Promise((resolve,reject)=>{
    //花时间比较多的任务封装起来， 以实现异步变同步
    setTimeout(()=>{
        console.log(0)
        resolve(10)
    },1000)
})