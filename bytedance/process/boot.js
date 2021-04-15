const cluster=require('cluster')  // 多核 多进程

if(cluster.isMaster){
    //不干活
    // console.log(require('os').cpus().length);
    for(let i=0;i < require('os').cpus().length/2;i++){
        createWorker()// 调度
    }
    function createWorker(){
        var worker = cluster.fork()  // 子进程
    }
}else {
    require('./app')
}