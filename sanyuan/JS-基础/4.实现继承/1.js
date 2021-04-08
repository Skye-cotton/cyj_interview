function Parent1(){
    this.name='parent1'
    this.school="dhlg"
}

function Child1(){
    Parent1.call(this)
    this.type='Child1'
}
console.log(new Child1);