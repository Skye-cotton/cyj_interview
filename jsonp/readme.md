# 跨域
    - 后端的跨域解决方案
    - JSONP json with padding 
      https://photo.sina.cn/aj/index?page=1&cate=recommend
      同源机制：

  1. 通过script img src 跨域向sina 发送了请求 完成一次http
  规避了js代码xhr  fetch 同源机制  
  JSON里面的数据   JS  代码能够使用

  2. &callback=callback
    sina 在页面上有一个callback的函数，等待你的调用

  3. callback({}) JSON +padding 

 xhr/fetch 因运行在沙箱中的js同源机制 无法请求跨域sina 资源
 迂回到使用script 标签 有跨域访问资源的能力（link img a），http请求中
 带上&callback=callback 这个padding， sina服务器就在json数据外面包一层callback函数，
 将这个带有padding的，可以在script得到后运行的函数，页面上已准备好了这个函数，从而效果一样。
  