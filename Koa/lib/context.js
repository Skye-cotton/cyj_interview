//ctx 怎么来的
let proto ={
   // url:request.url
} 
function defineGetter(prop,name){  //代理函数
    proto.__defineGetter__(name,function(){
        return this[prop][name] //this == ctx
    })
}
defineGetter('request','url') // url==request.url
defineGetter('request','path')
module.exports = proto