//冒泡排序
var arr = [3,4,1,2];
// 遍历数组，次数就是arr.length - 1
for (var i = 0; i < arr.length - 1; i++) {
	// 如果前一个数 大于 后一个数 就交换两数位置
	if (arr[i] > arr[i + 1]) {
		var temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}
}
console.log(arr)  // [3, 1, 2, 4]
