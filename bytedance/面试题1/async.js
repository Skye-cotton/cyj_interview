const getJson=()=>{  //异步
    return "JSON"
}

// 函数前面加 async 只是声明这个函数内部存在异步
async function testAsync(){
  try {
      //异步函数前面加await，逻辑就会等到这个异步函数执行完毕后，再往下执行
  await getJson() 
  } catch (error) {
      console.log(error);
  }
   
  //....
   
}