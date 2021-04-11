import React,{Component} from 'react'

export default class Pic extends Component{
    render(){
        let {img,title,cont}=this.props;
        return (
            <div className="pic">
                <img src={img} alt="" />
                <h3>姓名：{title}</h3>
                <p>外号：{cont}</p>
            </div>
        )
    }
}