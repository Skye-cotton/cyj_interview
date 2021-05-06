Array.prototype.reduce = function(callbackFn,initialValue){
    //处理数组类型异常
    if(this ===null || this === undefined){
        throw new TypeError("Cannot read property 'reduce' of null or undefined")
    }
    //处理回调类型异常
    if(Object.prototype.toString.call(callbackFn)!="[object Function]"){
        throw new TypeError(callbackfn + ' is not a function')
    }
    let O =Object(this);
    let len = O.length >>> 0;
    let k=0;
    let accumulator=initialValue
    if(accumulator === undefined){
        for(;k<len;k++){
            //查找原型链
           if(k in O){
            accumulator=O[k]
            k++;
            break;
        } 
        }
        
        //循环结束还没有退出，就表示数组全为空
    throw new Error('Each element of the array is empty')
    }
    for(;k<len;k++){
        if(k in O){
            //重点代码
            accumulator=callbackFn.call(undefined,accumulator,O[k],O)
        }
    }
    return accumulator
}