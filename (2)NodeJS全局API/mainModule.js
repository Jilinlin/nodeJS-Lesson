/**
 * 自定义模块，自定义JS文件，通过require来引入
 * require（相对路径）
 * 被引入模块通过module.exports来对外公布自己的一些方法或属性
 * 主模块可以访问被引用模块公布的方法和属性
 */


// var child = require("./childModule");//不写的话默认是js
// // console.log(child);
// child.sayHello();//共有方法
// child.showName();//私有方法

var circleModule = require("./circleModule.js");
var r = process.argv[2];
var circleObj = circleModule.circleFun(r);
console.log('圆的半径'+r);
console.log('圆的周长'+circleObj.circumference());
console.log('圆的面积'+circleObj.area());


/**
 * 1、原生模块，随环境安装就存在的
 * 2、自定义模块，自己编写的程序
 * 3、第三方模块，在命令行中进行安装的模块，是从npm服务器上下载到本地的
 * 直接require('date-now');
 * 
 */