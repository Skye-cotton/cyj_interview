var http = require('http');
http.createServer(function(req, res){
    // console.log(req.url);
    let data={a:1}
    res.writeHead(200, {'Content-type' : 'text/json'});
    const reg = /callback=([\w]+)/
    if(reg.test(req.url)){
        let padding= RegExp.$1;//匹配到callback=后面的
        res.end(`${padding}(${JSON.stringify(data)})`)
    }else{
        res.end(JSON.stringify(data));// JSON.stringify () 方法将 JavaScript 对象转换为字符串
    }
 
 
//  res.write('<h1>Node.js</h1>');
 
}).listen(3000);