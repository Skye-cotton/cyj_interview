class Promise{
  constructor(executor){
    //设置状态
    this.state='pending' //初始状态设置未完成
    //设置成功的值
    this.value=undefined;
    //设置失败的原因
    this.reason=undefined;
    //注意这里是数组
    this.onResolvedCallbacks=[]
    this.onRejectedCallbacks=[]
    //接下来把异步任务交给resolve
    let resolve =(value)=>{
      
      if(this.state ==='pending'){
        this.value=value;
        console.log(this.value)   
        // onFulFilled 执行一下？ 记忆     
        this.state='fulfilled'
        this.onResolvedCallbacks.forEach(fn=>fn())
      }
    }
    //如果有错误，输出失败的原因
    let reject=(reason)=>{
      if(this.state==='panding'){
        this.reason=reason
        console.log(this.reason);
        this.state='rejected'
        this.onRejectedCallbacks.forEach(fn=>fn())
      }
    }
    try{
      executor(resolve,reject)
    }catch(err){
      reject(err)
    }  
  }
  then(onFulfilled,onRejected){
      // 状态为fulfilled 时，传入成功后的回调，将执行权转移
      if(this.state =='fulfilled'){
        onFulfilled(this.value)
      }
      // 状态为rejected，传入失败后的回调
      if(this.state == 'rejected'){
        onRejected(this.reason)
      }
      if(this.state == 'pending'){
        this.onResolvedCallbacks.push(()=>{
          onFulfilled(this.value)
        })
        this.onRejectedCallbacks.push(()=>{
          onRejected(this.reason)
        })
      }
    }
}

new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(123)
    // throw new Error('出错了')
  },1000)
}).then((data)=>{
    console.log(data,'.then 被执行');
  })