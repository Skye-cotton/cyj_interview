const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const path = require('path');
const md5 =require('md5')
app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
    <title>Document</title>
    </head>
    <body>
    demo1
    <script src="/demo.js">
    </script>
    </body>
  </html>
  `)
})
// demo.js ? 
// 路由是/demo.js
// fs 把它读取并发送流
app.get('/demo.js', (req, res) => {
  console.log('response here');
  //如果浏览器带上一个？表达他有这个文件， 且时间是什么？
  // 返回文件
  const jsPath = path.resolve(__dirname, './static/js/demo.js');
  let status = fs.statSync(jsPath);
  // console.log(status, '--------------');
  let lastModified = status.mtime.toUTCString();
  let cont = fs.readFileSync(jsPath);
  let etag=md5(cont)

  if(req.headers['if-none-match'] === etag){
      res.setHeader('ETag',etag)
      res.writeHead(304,'Not Modified')
      res.end()
      return
  }

//   if(lastModified==req.headers['if-modified-since']){
//       res.writeHead(304,'Not Modified')
//       res.end() //为空  304 不需要有响应，请使用本地缓存
//       return ;
//   }
  console.log(lastModified, '-------------------');
  // 1. 把文件返回
  // 2. 如何在返回文件的同时， 应该要给它一个标志， 加上时间  HTTP Etag 
  // 设置响应头, 
  res.setHeader('Cache-Control', 'public, max-age=30')
  res.setHeader('Last-Modified', lastModified)
  res.setHeader('ETag',etag)
  res.writeHead(200, 'OK')
  res.end(cont)
})

app.listen(port, () => {
  console.log('listen ...');
})