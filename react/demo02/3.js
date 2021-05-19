
//避免数据被修改
const { Map,fromJS } =require('immutable')  //不可变数据时
//es6 map
let a= Map({
    select:'users',
    filter:Map({name:'Cam'})
})
// 引用似  a  b
let b = a.set('select','people')
// console.log(a==b)  //b不是a的复用

// console.log(a.get('filter') === b.get('filter'))
//react 考题  

const obj ={
    count:0
}
const immutableState =fromJS(obj)
console.log(immutableState.get('count'))
const jsObj = immutableState.toJS()

jsObj.count=2
console.log(obj)