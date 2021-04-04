
import React,{ useState ,useEffect,useRef} from 'react'
//react DOM 少 ref
import cartData from './data'
import CartItem from './CartItem';

const Cart =()=>{
    const [ checkedMap,setCheckedMap ]=useState(0)
    const onCheckedChangeRef = useRef(null)
    //创造了node的ref
    
    const sumPrice=()=>{
        //useState
        //需求 选中的话才算总价
        //切换选中的时候，可以重新计算
        //选中，state
        let sum = 0
        for(const item of cartData){
            if(checkedMap[item.id]){
                sum +=item.price
            }
            
        }
        return sum
    }
    useEffect(()=>{
        onCheckedChangeRef.current=onCheckedChange
    })
    const onCheckedChange=(cartItem,checked)=> {
        console.log(cartItem,checked)
        const {id}=cartItem
        const newCheckedMap={...checkedMap,[id]:checked}
        setCheckedMap(newCheckedMap)
    }
    const onCheckedAll = (e)=>{
        //checked
        //checkedMap 整体设置
        //setCheckedMap
        const {checked}=e.target
        const newCheckedMap={}
        cartData.map(item =>{
            newCheckedMap[item.id]=checked
        })
        setCheckedMap(newCheckedMap)
    }
    return (
        <div>
            <ul>
                {cartData.map((item)=>{
                    const checked = checkedMap[item.id]  || false 
                    //checked 很难搞  子组件 props 提供，又怎么改
                    return <CartItem item={item} checked={checked}
                     onCheckedChangeRef={onCheckedChangeRef} 
                    key={item.id}
                    />
                })}
            </ul>
            <p>
                <input type="checkbox" name="" onChange={onCheckedAll} />
                全选
                总价：{sumPrice()}
            </p>
        </div>
    )
}
export default Cart