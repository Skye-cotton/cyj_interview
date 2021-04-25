const PENDING='pending'
const RESOLVED='resolved'
const REJECTED='rejected'

//三个状态，两个函数
function MyPromise(fn){
  const that=this;
  that.state=PENDING;
  that.value=null;
  that.error=null
  that.resolvedCallbacks=[]
  that.rejectCallbacks=[]

  function resolve(value){
    if(that.state = PENDING){
        that.state=RESOLVED;
        that.value=value;
        that.resolvedCallbacks.map(cb=>{
            cb(that.value)
        })
    }
    that.state=RESOLVED
  }

  function reject(error){
    if(that.state = PENDING){
        that.state=REJECTED;
        that.error=error;
        that.rejectCallbacks.map(element=>{
            element(that.error)
        }
        )
    }
    that.state=REJECTED
  }

  try {
      fn(resolve,reject)
  } catch (e) {
      reject(e)
  }
}

MyPromise.prototype.then=function(onFulfilled,onRejected){
    const that = this;
    onFulfilled=typeof onFulfilled === 'function'?onFulfilled:v=>v  //type 可以判断函数
    onRejected=typeof onRejected === 'function'?onRejected:r=>{throw r}

    if(that.state === PENDING){
        that.resolvedCallbacks.push(onFulfilled)
    }
    if(that.state === RESOLVED){
        onFulfilled()
    }
}

// new MyPromise((resolve,reject)=>{
//     resolve('OK')
// }).then((res)=>{

// })

let promise = new MyPromise((resolve, reject) => {
    setTimeout(function () {
        resolve('success data')
    }, 0)
})

promise.then(res => {
        console.log("第一次调用", res);
        return res;
    }, err => {
        console.log("error:", err);
    })
    
console.log("首先会被执行");
