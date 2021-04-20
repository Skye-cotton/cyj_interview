Array.prototype.map=function(callbackFn,thisArg){
    //处理数组类型异常
    if(this === null || this === undefined){
        throw new TypeError("数组类型异常")
    }
    //处理回调类型异常
    if(Object.prototype.toString.call(callbackFn) != "[object Function]"){
        throw new TypeError(callbackFn+'不是一个函数')
    }
    //草案中提到要先装换为对象
    let O = Object(this)
    // console.log(O);//Object(0) []
    let T = thisArg
    // console.log(T);


    let len= O.length >>> 0;
    let A = new Array(len)
    for(let k=0;k<len;k++){
        //使用in在原型链查找
        // 如果使用hasOwnProperty，只能找私有属性
        if(k in O){
            let kValue=O[k]
            //依次传入this,当前项，当前索引，整个数组
            let mappedValue=callbackFn.call(T,kValue,k,O)
            A[k]=mappedValue
        }
    }
    return A
}


console.log(Array.prototype.map((a,b)=>{a+b},[1,2,3]));