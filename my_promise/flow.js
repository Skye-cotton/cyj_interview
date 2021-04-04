//effects[]数组中包含：
//1. 普通函数  () 
//2. 自身的递归  subFlow 不平坦
//3. 不平坦  js中的 flattern
const _ = require('lodash')
const createFlow = (effects=[])=>{
    // console.log(effects,'----------')
    // console.log(_.flatten(effects),'+++++++++++++')
    // 不要影响外面  数组是引用类型，函数内部使用时会影响外面
    let sources = effects.slice().flat();//slice 会返回一个全新的数组。闭包，这一层需要被打理的任务
    for(let item of sources){
        //如果是普通函数请执行，如果是delay 等待 then 执行
        //如果是自身的话 递归调用，出口
        // - flow 
        // - 每一个item 都去
        // - 普通函数的话
        // console.log(item,'---------')
    }
    const run =(callback)=>{
        //有东西
        while(sources.length){
            //source 为空就解决了
            const task =sources.shift()
            // 余下的 我都作为新的一个flow 来看待
            const next = () =>createFlow(sources).run(callback)
            //退出条件
            if(typeof task === 'function'){
                const res =task()
                if(res?.then){
                    // then 得到什么？
                    res.then(next)
                    return;
                }
            //本身的递归
            }else if(task?.isFlow){
                //又是一个flow
                // ？递归 
                task.run(next)
                return
            }
        }
        callback()
    }
    return {
        run,
        isFlow:true //手动加
    }
}

module.exports=createFlow



