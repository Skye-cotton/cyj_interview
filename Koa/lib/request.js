//为什么Koa里面没有req
let url=require('url')
let request ={
    // ctx.url == ctx.request.url
    get url(){ //整个地址全拿，包括参数
        console.log(this);
        return this.req.url
    },
    get path(){ //只拿路径名称
        return url.parse(this.req.url).pathname
    }
}

module.exports=request