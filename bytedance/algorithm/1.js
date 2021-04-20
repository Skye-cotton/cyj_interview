class TreeNode{
    constructor(value){
        this.value=value
        this.descendents=[]
    }
}

const abe = new treeNode('Abe')
const homer = new treeNode('Homer')
const bart = new treeNode('Bart')
const lisa = new treeNode('Lisa')
const maggie = new treeNode('Maggie')
abe.descendents.push(homer)
homer.descendents.push(bart,lisa,maggie)