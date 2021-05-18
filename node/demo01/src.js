const mime=require('mime-types')
const fs=require('fs')
const http=require('http')

const server=http.createServer((req,res)=>{

    const url=new URL('http://root:123456@1.2.3.4:8080/pathxxxx?query=123&query2=456#hhhh')
    res.write(`protocol:${url.protocol}\n`)
    res.write(url.username+'\n')
    res.write(url.password+'\n')
    res.write(url.host+'\n')
    res.write(url.port+'\n')
    res.write(url.pathname+'\n')
    res.write(url.searchParams+'\n')
    res.write(url.hash+'\n')
    res.end()
    // const {url,method,headers}=req
    //url 匹配
    // if(/^\/image\/.*/.test(url) && method === 'GET'){
    //     fs.readFile('./public/a.jpg',(err,chunk)=>{
    //     if(err){
    //         res.write(err)
    //         res.writeHead(404,{
    //             'content-type':'text/html'
    //         })
    //         res.end()
    //     }
    
    //     else{
    //         res.writeHead(200,{
    //             'content-type':mime.contentType('jpg')
    //         })
    //         res.end(chunk)
            
    //     }
    // })
    // }
    // else if(/^\/data\/.+/.test(url)){
    //     res.write(url)
    //     res.end()
    // }
    // else{
    //     res.writeHead(404,{
    //         'content-type':'text/plain;charset=utf-8',
    //     })
    //     res.end('路径不存在')
    // }
    
    // res.write(`url:${url}\n`)
    // res.write(`method:${method}\n`)
    // res.write(`headers${JSON.stringify(headers,null,' ')}\n`)
    // res.end()


})

server.listen(8080,()=>{
    console.log('服务已经启动');
})