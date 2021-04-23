//服务层为控制层打工的（提供数据）
'use strict'

const Service = require('egg').Service

class DiaryService extends Service{
    async list(){
        const {ctx}=this
        try {
            //从数据库取数据
            const result = await ctx.app.mysql.select('diary')
        } catch (error) {
            console.log(error);
            return null
        }
    }
    async add(params) {
        const {ctx}=this
        try {
            const result=await ctx.app.mysql.insert('diary',params)
            return result
        } catch (error) {
            console.log(error);
            return null
        }
      }
      async updata(params){
        const {ctx}=this
        try {
            
        } catch (error) {
            
        }
      }
}
module.exports=DiaryService