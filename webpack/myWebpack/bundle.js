const fs = require('fs')
const parser=require('@babel/parser')
const traverse=require('@babel/traverse').default
const path=require('path')
const babel=require('@babel/core')

const getModuleInfo=(file)=>{
    const body=fs.readFileSync(file,'utf-8')
    const ast = parser.parse(body,{
        sourceType:'module'  //表示我们要解析的是ES模块
    })
    // console.log(ast.program.body);
    const deps={}
    traverse(ast,{
        ImportDeclaration({node}){
            const dirname=path.dirname(file)
            const abspath='./'+path.join(dirname,node.source.value)
            deps[node.source.value]=abspath
            
        }
    })
    // ES6 -> ES5
    const {code}= babel.transformFromAst(ast,null,{
        presets:['@babel/preset-env']
    })

    //获取所有的依赖
    const moduleInfo={file,deps,code}
    return moduleInfo

    // console.log(code);

} 
const parseModules=(file)=>{
    const entry=getModuleInfo(file)
    const temp=[entry]
    const depsGraph={}
    for(let i=0;i< temp.length;i++){
        const deps=temp[i].deps
        if(deps){
            for(const key in deps){ // './add.js
                if(deps.hasOwnProperty(key)){
                    temp.push(getModuleInfo(deps[key]))
                }
            }
        }
    }
    console.log(temp);

    temp.forEach(moduleInfo=>{
        depsGraph[moduleInfo.file]={
            deps:moduleInfo.deps,
            code:moduleInfo.code
        }
    })
    console.log(depsGraph);
    return depsGraph
}

const bundle =(file) =>{
    const depsGraph=JSON.stringify(parseModules(file))
    return `(function(graph){
        function require(file){
            function absRequire(relPath){
                return require(graph[file].deps[relPath])
            }
            var exports={}
            (function(require,exports,code){
                eval(code)
            })(absRequire,exports,graph[file].code)
        }
        require(${file})
    })(${depsGraph})`
}

const content=bundle('./src/index.js')
console.log(content);

fs.mkdirSync('./dist')
fs.writeFileSync('./dist/bundle.js',content)

// parseModules('./src/index.js')