import App, { Container } from 'next/app';
import 'antd/dist/antd.css';
import Layout from '../components/Layout';
import React, { Component } from 'react';
import {Provider} from 'react-redux'
import withRedux from '../lib/with-redux-app'

class MyApp extends App {

    static async getInitialProps(ctx){
        //ctx:ssr 上下文环境
        const {Component} =ctx;
        let pageProps={}
        // 拿到Component上定义的getInitialProps
        if( Component.getInitialProps){
            pageProps=await Component.getInitialProps(ctx)
        }
        return {
            pageProps
        }
    }

    render() {
        const {reduxStore,Component,pageProps }=this.props
        return (
            <Container>
                
                    <Provider store={reduxStore}>
                        <Component {...pageProps} />
                    </Provider>
                
            </Container>
        )
    }
}



export default withRedux(MyApp) 
