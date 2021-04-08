function Parent5 () {
    this.name = 'parent5';
    this.play = [1, 2, 3];
  }
  function Child5() {
    Parent5.call(this);
    this.type = 'child5';
  }
  Child5.prototype=Object.create(Parent5.prototype)
  Child5.prototype.constructor=Child5

  var s3=new Child5()
  s3.play.push(4)
var s4=new Child5()
  console.log(s3.play,s4.play);