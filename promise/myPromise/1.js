const PENDING='pending'
const RESOLVED='resolved'
const REJECTED='rejected'

function MyPromise(fn){
    const that=this
    that.state=PENDING
    that.value=null
    that.resolvedCallbacks=[]
    that.rejectedCallbacks=[]

    function resolved(value){
        if(that.state === PENDING){
            that.state=RESOLVED
            that.value=value;
            that.resolvedCallbacks.map(cb=>{
                cb(that.value)
            })
        }
        that.state=RESOLVED
    }

    function rejected(err){
        if(that.state === PENDING){
            that.state=REJECTED
            that.value=err;
            that.rejectedCallbacks.map(cb=>{
                cb(that.value)
            })
        }
    }
    try {
        fn(resolve,reject)
    } catch (e) {
        reject(e)
    }
}
MyPromise.prototype.then=function(onFulfilled,onRejected){
    
}


new MyPromise()