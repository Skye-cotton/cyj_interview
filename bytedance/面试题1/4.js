var name = 'world!';

(function() {
  if (typeof name === 'undefined') {
    var name = 'Jack'//声明提升，会提升到当前作用域的顶部
    console.log('Goodbye' + name);
  } else {
    console.log('Hello' + name);
  }
})()
//结果：GoodbyeJack