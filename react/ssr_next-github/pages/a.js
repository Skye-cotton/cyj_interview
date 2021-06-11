import styled from 'styled-components'

const Title=styled.h1`
    color: yellow;
    font-size:40px;
`

const A =({name,timeDiff})=>{
    return (
        <>
            <Title>这是A页面，时间差是{timeDiff}</Title>

        </>
    )
}

A.getInitialProps = async stx =>{
    const moment =await import ('moment')
    const timeDiff = moment.default(Date.now() - 60*1000).fromNow()
    return {
        timeDiff

    }
}

export default A