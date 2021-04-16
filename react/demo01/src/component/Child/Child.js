import React,{useContext} from 'react';
import myContext from '../createContext.js'

const Child=()=>{
    const count=useContext(myContext);
    return (
        <h2>{count}</h2>
    )
}

export default Child