import React,{ useState,useEffect} from 'react';
// 用过哪些库组件？ style-component moment lodash better-scroll axios
import classNames from 'classnames'  //多动态类名的输出
import TodoForm from './TodoForm'
import axios from './api/axios'
// ts + react 怎么做类型检测？
// 1. 内置
// 2. npm i @types/react
// 3. prop State type interface 自定义类型 models
//   Todo Todos Promise<Todos>

type Todo={
  id:number
  name:string
  done:boolean
}
// 元组 
type Todos= Todo[]

const App:React.FC = ()=>{
  const [todos,setTodos]=useState<Todos>([])
  const onToggleTodo=(todo:Todo)=>{

  }
  const refreshTodos=()=>{
    axios<Todos>('/api/todos').then(setTodos)
  }
  useEffect(()=>{

  },[])
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm refreshTodos={refreshTodos} />
        <ul>
          {
            todos.map((todo,index)=>(
              <li
                key={index}
                className={classNames({done:todo.done})}
                onClick={()=> onToggleTodo(todo)}
                >
               {todo.name}
              </li>
            ))
          }
        </ul>
      </header>
    </div>
  )
}

export default App;