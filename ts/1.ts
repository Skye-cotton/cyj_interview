import { ReadSyncOptions } from "node:fs"


type FunctionProps ={
    //onSomething 函数  参数+返回值
    a:number
    //类型约束一个没有返回值的函数
    onSomething: ()=>void;
    // input num  类型约束为数值型
    onChange: (id:number) => void
    // @types/react  泛型如何  去做这件事
    onClick(event:React.MouseEvent<HTMLButtonElement>)
}
// T  表示 类型的一个占位
type Dog<T> = {name:string,type:T}
const dog:Dog<number> = {name:'wewe',type:21}

React.MouseEvent<HTMLButtonElement>

interface Props {
    
}
const Item:React.FC<Props> =(props)=>(
    return (
        <>
        </>
    )
)