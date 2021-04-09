# 类数组对象：arguments
当我们调用函数时，会给函数传递一些参数，把这些参数全部存储到argument。
- argument：是一个对象，属性从0开始 0,1,2....还有callee(可以递归)和length属性
- 常见的类数组：
    - 用getElementByTagName/ClassName/Name（）获得的HTMLCollection
    - 用querySlector获得的nodeList
那这导致很多数组的方法就不能用了，必要时需要我们将它们转换成数组，有哪些方法呢？
1. Array.prototype.slice.call()
2. Array.from()
3. ...arguments
4. concat+apply

## call()方法的作用和 apply() 方法，
区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。