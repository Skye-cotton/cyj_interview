const Koa=require('./lib/application')
const app = new Koa()

app.use((ctx)=>{
    console.log(ctx.req.url);
    console.log(ctx.request.req.url);
    console.log(ctx.response.req.url);
  
    console.log(ctx.request.url); // ctx.req.url
    console.log(ctx.request.path);
    console.log(ctx.url);
    console.log(ctx.path);

})

app.listen(3000,()=>{
    console.log('服务器已经启动');
})

// let http=require('http')

// let server=http.createServer((req,res)=>{
//     res.end('Hello Jak')
// })
// server.listen(4000)
// console.log('------');