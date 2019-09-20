//第三方模块
/**
 * npm(node package manager) 包管理器和模块一个概念
 * 会有大量的第三方上传的模块
 * 
 * 他是一个远端的模块的服务器
 * 模块名称是唯一的
 * 
 * npm install date-now
 * 所有的文件都会安装在node_modules文件夹内
 * npm install 模块名称
 * 回车，就会去npm服务器上查找该模块，如果存在该模块
 * 就会下载到当前目录的node_modules文件夹中
 * 
 * 安装模块成功的两个条件：网络、该模块在npm上实际存在
 */

 /**
  * 模块的使用
  */
 //引入一个模块
 const now = require("date-now");
 console.log(now);//一般得到一个对象，[Function: now]这个得到一个函数
 console.log(now());//时间戳
 console.log(Date.now());

 