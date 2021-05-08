# 什么是前端路由
SPA(single page application)
路由描述的是URL和UI之间的映射关系，这种映射关系是单向的，即URL变化引起UI更新(无需刷新页面)

# 如何实现前端路由
核心问题：
1. 如何改变URL不引起页面刷新  
 在#后面的是哈希值，可以做到不刷新页面   https://www.baidu.com/#123
2. 如何检测URL变化了
```
window.addEventListener('hashchange',()=>{
            console.log('123');
        })
```
 - hash
 - history
