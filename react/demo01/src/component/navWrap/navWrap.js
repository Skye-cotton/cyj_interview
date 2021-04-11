import React, { Component } from 'react';
import Pic from '../pic/pic'
let list=[
    {
        img: require('../../static/images/tx.jpg'),
        title: '易烊千玺',
        cont: '大佬'
    },
    {
        img: require('../../static/images/tx.jpg'),
        title: '易烊千玺',
        cont: '大佬'
    }
]

export default class NavWrap extends Component{
    render(){
        let dataList=list.map((item,index)=>{
            return (
                <Pic
                key={index}
                {...item}
                >

                </Pic>
            )
        })
        return (
            <div className="navWrap">
                {dataList}
            </div>
        )
    }
}