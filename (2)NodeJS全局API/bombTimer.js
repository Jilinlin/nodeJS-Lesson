function Bomb(){
    this.message = "bomb!";
}
Bomb.prototype.explode = function(){
    console.log(this);
    console.log(this.message);
}

var bomb = new Bomb();
//setTimeout(bomb.explode,2000);//undefined 当发生多层函数嵌套时，this的指向会发生变化 因为setTimeout也是一个函数
setTimeout(bomb.explode.bind(bomb),2000);//bind 改变this指向
