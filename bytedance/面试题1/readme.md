1. transform 是位于 Composite Layers 层 (复合层)
GPU进程开启新的复合图层，不会影响默认的复合图层(就是普通的文档流)，
所以并不会影响周边的DOM结构。所以transform不会引起回流
2. 如何css画一个三角形
```
.parent
{
    width: 0;
    height: 0;
    border-bottom: 10px solid #000;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
}
```
3. css画扇形
```
.parent{
            width: 0;
            height: 0;
            border: 50px ;
            border-style: solid;
            border-color: #000 transparent transparent;
            border-radius: 50px;   
        }
```


3. 回流(重排)和重绘

回流：页面布局和几何属性 的改变
重绘：不影响几何位置的改变，比如颜色改变



 
DOM树（纯HTML）：表示页面结构，
渲染树(DOM树加CSS)：就是GPU能读的懂的东西，表示DOM节点如何显示

GPU拿到渲染树后，进行布局绘制叫做重排
当页面上的DOM节点发生非布局变更时GPU需要再次绘制--重绘

不管是重排还是重绘，都会消耗浏览器的性能

## 怎样触发重排：
 - 页面首次渲染
 - 删除或添加可见的dom元素
 - 改变元素位置
 - 改变元素尺寸
 - 改变窗口大小
 - offsetWidth offset...  clientTop client
## 怎么触发重绘：
 - 当页面上的dom改变了非几何信息的属性时
## 回流一定会重绘，重绘不一定回流
4. 变量提升
5. 


事件执行机制 EventLoop
先执行同步，
查看执行栈是否为空，如果为空
查看是否有微任务需要执行，如果有放入执行栈
在查看是否有宏任务需要执行

微任务有哪些：
宏任务有哪些：

事件循环机制：
