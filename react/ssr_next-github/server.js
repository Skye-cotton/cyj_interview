const Koa= require('koa')
const Router = require('koa-router')
const next = require('next')//中间件

//koa + next 合作完成 服务器端 渲染
// koa更适合作 服务器 -> ngnix
// 数据库 ->koa -> next ->initData
// text/html

const dev = process.env.NODE_ENV != 'production'
const app =next({dev})
//用户-> nginx ->koa->next
const handle=app.getRequestHandler()

const PORT =3001
// koa 最重的SSR
// koa ssr -> react ssr
app.prepare().then(()=>{
    const server= new Koa()
    const router = new Router()
    router.get('/a/:id',async ctx =>{
        console.log('11111111');
        const id = ctx.params.id
        //取数据
        await handle(ctx.req,ctx.res,{
            pathname:'/a',
            query:{
                id
            }
        })
        ctx.respond=false
    })

    server.use(router.routes())

    server.use(async (ctx,next)=>{
        await handle(ctx.req,ctx.res)
        ctx.respond=false
    })
    server.listen(PORT,()=>{
        console.log(`koa server listening on ${PORT}`);
    })
})