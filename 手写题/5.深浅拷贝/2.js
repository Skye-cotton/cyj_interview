//简单版深拷贝 只考虑普通对象属性，不考虑内置对象和函数。

// function deepClone(obj){
//     if(typeof obj !== 'object')return
//     var newObj = obj instanceof Array ? []:{}
//     for(var key in obj){
//         if(obj.hasOwnProperty(key)){
//             newObj[key]=typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
//         }
//     }
//     return newObj
// }




function deepClone(obj){
    if( typeof obj !=='object') return;
    var newObj=obj instanceof Array ? []:{}
    for(var key in obj){
        newObj[key]=typeof obj[key] ==='object'? deepClone(obj[key]):obj[key]
    }
    return newObj
}

console.log(deepClone({a:1,b:3}));

















