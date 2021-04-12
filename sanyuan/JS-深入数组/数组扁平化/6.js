//只要有一个元素有数组，那么循环继续
while (ary.some(Array.isArray())) {
    ary = [].concat(...ary);
  }