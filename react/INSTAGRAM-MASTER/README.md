- react 全家桶，全面react hooks 函数化编程
- 服务器端采用 egg.js+ts + mysql 提供API 服务
- 数据库的说明文件
    mysql mongdb 区别？
    mysql是关系型，mongdb不使用SQL语句，文档型
    关系型业务适合mysql user post comment
    mongdb 没有表的概念，表是collection集合，
    而是JSON文件组成，用于一些比较杂的数据，适用于微博 短视频。
    数据库连接 egg.js的config.js
    redis 内存数据库 KV 90%的查询都是重复的
    内存中的存储空间
    文章列表  mysql-> 数据库  I/o 开销
    第一次，查  index_posts :[{},] ->redis  LRU 

    后端程序和数据库是分离的，甚至在机器上是分离的
    mysql2 数据库驱动 model  egg.js 通过配置插件

    koa/express  轻量级的node服务器端开发框架
    egg.js 企业级 标准，对新手更友好，约定大于一切 看文档就好了

    POST  /login  {name:'z',password:'123'}

    router.post('/login',authorization,(req,res)=>{
        数据的完整性。。。
        service(title,content)
    })

    - app.ts  7001 启动web服务
    - http访问由中间件打理
      路由器中间件 匹配到路由地址后，
      交给相应的controller
      http.createServer((req,res)=>{

      })
    - 校验表单 交给service去存储
    import Post model
    new Post save()


评论要做什么？
- 参数校验
- 用户ID
- 获取用户的详细信息