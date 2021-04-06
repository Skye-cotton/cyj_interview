function myInstanceof(left,right){
    if(left==null||typeof left !== 'object'){return false}
    let proto=Object.getPrototypeOf(left)
    while(true){
        if(proto==null){return false}
        if(proto==right.prototype){return true}
        proto=Object.getPrototypeOf(proto)
    }
}

console.log(myInstanceof("111", String)); //false