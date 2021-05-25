- react 性能优化？
    1. shouldComponentUpdate
    2. React.PureComponent
    3. React.memo
    前三种 17版本之前
    React hooks 带来了新方式
    3. useEffect
    4. usememo
    5. useCallback
    
- 父子组件
    父组件 setState
    子组件 无辜的被更新


    渲染 更新

- React 组件受到 state/props 的影响，默认行为是state每次发生变化 组件都会重新渲染
    shouldComponentUpdate  true 默认 | false  跳过更新
    render -> createElement(element) -> vdom->{type:'div'}