import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import Child from './component/Child/Child'
import myContext from './component/createContext'



const [count,setCount] =useState(0)

ReactDOM.render(
    
    <div>
        <p>点击了 {count} 次</p>
        <button onClick={()=>{setCount(count+1)}}>点击</button>
        <myContext.Provider value={count}>
            <Child />
        </myContext.Provider>
    </div>
    ,document.getElementById('root')
)