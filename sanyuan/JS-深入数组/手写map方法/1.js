Array.prototype.map=function(callbackFn,thisArg){
    //处理数组类型异常
    if(this === null || this === undefined){
        throw new TypeError("数组类型异常")
    }
    //处理回调类型异常
    if(Object.prototype.toString.call(callbackFn) != "[object Function]"){
        throw new TypeError(callbackFn+'不是一个函数')
    }
}