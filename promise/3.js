// executor   执行器的实现
// 状态的转移
// thenable
// 如何让执行器决定状态转移的执行
class Promise{
    constructor(executor){
        this.state='pending' //初始化未完成状态
        //成功的值
        this.value=undefined;
        //失败的原因
        this.reason=undefined;
        this.onResolvedCallbacks=[]
        this.onRejectedCallbacks=[]
        //异步任务会把结果交给resolve
        let resolve=(value)=>{
            console.log(value,'---------')
            if(this.state === 'pending'){
            console.log('fulfilled 被执行')
            this.value=value
            // onFulFilled 执行一下？ 记忆
            this.state='fulfilled'
            this.onResolvedCallbacks.forEach(fn=>fn())
        }
        }
        let reject=(reason)=>{
            if(this.state === 'pending'){
                this.reason=reason
                this.state="rejected"
                console.log(this.state)
                this.onRejectedCallbacks.forEach(fn=>fn())

            }
        }
        try{
            executor(resolve,reject)
        }catch(err){
            reject(err)
        }
        
    }
    //当前promise解决了，完成了状态转移， 把控制权交出来
    then(onFullfilled,onRejected){
        console.log('+++++++')
        // 状态为fulfilled 时，传入成功后的回调，将执行权转移
        if(this.state == 'fulfilled'){
            
            onFullfilled(this.value)
        }
        // 状态为rejected，传入失败后的回调
        if(this.state == 'rejected'){
            onRejected(this.reason)
        }

        if(this.state == 'pending'){
            this.onResolvedCallbacks.push(()=>{
                onFullfilled(this.value)
            })
            this.onRejectedCallbacks.push(()=>{
                onRejected(this.reason)
            })
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
}).then((data)=>{
    console.log(data,'*****')
})