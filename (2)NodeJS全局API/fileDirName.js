// 1、引入http原生模块
const http = require("http");
const path = require("path");
const fs = require("fs");

// 2、创建服务器,只要有http请求访问当前端口，就会执行回调函数里面的内容
var server = http.createServer(function(req,res){//回调函数 req请求对象 res响应对象
    // 找到网页文件路径
    var htmlPath = path.join(__dirname,"/views/view.html");
    // 根据文件路径读文件中的代码
    var htmlContent = fs.readFileSync(htmlPath);//二进制
    // 将代码转化为字符串
    htmlContent = htmlContent.toString("utf8");
    // 将网页文件响应到客户端
    res.writeHead(200,{"Content-Type":"text/html"});//响应头 
    res.write(htmlContent);//响应读到的内容
    res.end();//响应结束
});

// 3、服务器监听一个端口
server.listen(8080);

// 4、输出提示信息
console.log("server is listening 8080");


