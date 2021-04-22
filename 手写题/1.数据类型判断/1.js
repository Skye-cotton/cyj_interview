//数据类型判断  使用 Object.protoType.toString.call(obj)

function typeOf(obj){
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase()
}

 
console.log(typeOf([])  );