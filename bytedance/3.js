
// 操作系统中进程和线程是怎么通信的
// 操作系统
// # node 
// 是js基于 webkit 的服务端实现
// chrome= chromium(JS编译) + DOM parser
// chromium + fs + network... =node
// node 是异步无阻塞单线程语言  更好的高并发
// CPU 同时运行很多软件的假象
// 进程：资源分配的最小单元，线程：是执行的最小单元

/**
 * node 最大的问题是什么？容易挂
 * 怎么多进程？ cluster node 8.0 以后 PHP 抄了
 * 进行多核运算  高并发？
 * 1. 怕挂掉  有了多进程
 * 2. 充分利用服务器的多核 每一个核都可以独立启动一个node 进程
 * 3. cluster， 帮助我们做 负载均衡
 * 4. 更适合B/S 这种天生的高并发架构
 * 
 */