import React, { Component } from 'react';

class Child extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(this.props.parentInfo);
        console.log(nextProps.parentInfo);
        return this.props.parentInfo !== nextProps.parentInfo
    }

    updateChild(){
        this.forceUpdate()
    }
    render(){
        console.log(`Child Component render`);
        return (
            <div>
                这里是child子组件
                <p>{this.props.parentInfo[0].name}</p>
            </div>
        )
    }

}

export default React.memo(Child) 