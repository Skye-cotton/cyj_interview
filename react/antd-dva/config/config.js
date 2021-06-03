export default {
    dva:{},
    antd:{},
    singular:true, //约定单数目录 page
    routes:[{
        path:'/',
        component:'../layout',
        routes:[
            {
                path:'helloworld',
                component:'./HelloWorld',
            },{
                path:'puzzlecards',
                component:'./puzzlecards',
            }
        ]
    }]
}