import express from 'express';
import {systemConfig} from './config'

const app:express.Application=express();
app.listen(systemConfig,()=>{
    console.log(`服务已经启动 ${systemConfig.port}`);
    
})