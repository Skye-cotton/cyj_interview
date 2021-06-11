import HeaderFooter from '../../layouts/HeaderFooter'
import dynamic from 'next/dynamic'
import React from 'react';
const Olddriver = dynamic(import('../../components/OldDriver'),{
    loading:()=><p>Loading....</p>
})

export default ()=>{
    return (
        <HeaderFooter>
            <div id="homepage">
                <Olddriver></Olddriver>
            </div>
            <style>{`
                #homepage {
                width: 100%;
                height:600px;
                background-color: #f7f7f7;
                display: flex;
                justify-content: center;
                align-items: center
                }
            `}</style>

        </HeaderFooter>
    )
}