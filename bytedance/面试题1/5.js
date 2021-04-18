
/**
 * 面试题：
 * 输出什么
 * async/await 原理是什么？
 * 将这段代码翻译成promise
 */

function getJson() {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        console.log(2);
        resolve(2)
      }, 2000)
    })
  }
  
  // async function testAsync() {
  //   await getJson()  //事件循环机制  await 下面的代码会去到下一次事件循环机制
  //   console.log(3);
  // }
  function testAsync(){
    return Promise.resolve().then(()=>{
      return getJson()
    }).then(()=>{
      console.log(3);
    })
  }
  
  testAsync() // 2 3