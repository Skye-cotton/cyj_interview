// executor   执行器的实现
// 状态的转移




// 如何让执行器决定状态转移的执行
class Promise{
    constructor(executor){
        this.state='pending' //初始化未完成状态
        //成功的值
        this.value=undefined;
        //失败的原因
        this.reason=undefined;
        //异步任务会把结果交给resolve
        let resolve=(value)=>{
            if(this.state === 'pending'){
            this.value=value
            console.log(this.value)
            this.state='fulfilled'
        }
        }
        let reject=(reason)=>{
            if(this.state === 'pending'){
                this.reason=reason
                this.state="rejected"
                console.log(this.state)
            }
        }
        try{
            executor(resolve,reject)
        }catch(err){
            reject(err)
        }
        
    }
}

new Promise((resolve,reject)=>{
    //花时间比较多的任务封装起来， 以实现异步变同步
    setTimeout(()=>{
        // console.log(0)
        resolve(123)
        // 语法错误
        // throw new Error('出错了')
    },1000)
})