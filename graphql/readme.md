restful 的替代品
来自于Facebook 良心出品的查询方案 2015年

json-server
缺点？
基于restful的概念，一切皆资源
url +action
db.json 资源中心
/results  list 请求到了

数据库里 还是db.json 一起被查出来，select *
多了好多我们不要的数据，select name,sex from user
基础上，设计了graphql  查询设计语言
graphql 可以做以下事情
1. 你要什么，设计查询方案，就得到什么
2. 合并传统后端在拿数据的时候要连n张表进行查询，一次就够了

- 启动graphql
    1. express
    2. 加入graphql 中间件，每次查询 graphql都会介入
       graphqlHTTP playground
    3. schema  hero + rootValue
      就有了
    4. graphql 可以省去很多的请求浪费
    5. 前端可以自己决定用哪些字段