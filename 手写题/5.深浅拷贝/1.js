//浅拷贝：只考虑对象类型。
function shallowCopy(obj){
    if(typeof obj !== 'object') return

    let newObj=obj instanceof Array ? []:{}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key]=obj[key]
        }
    }
    return newObj
}