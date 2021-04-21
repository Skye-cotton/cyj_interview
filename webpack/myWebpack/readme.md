1. 核心打包原理
  - 需要读到入口文件里面的内容
  - 分析入口文件，递归的去读取模块所依赖的文件内容，生成AST语法树
  - 根据AST语法树，生成浏览器能运行的代码


2. 模块分析
 - @babel/parser

3. 收集依赖
  将使用import语句引入的文件路径收集起来
  npm i @babel/traverse

4. ES6 转成ES5(AST) 
  @babel/core
  @babel/preset-env