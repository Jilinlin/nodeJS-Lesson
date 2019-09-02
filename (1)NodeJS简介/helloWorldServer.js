/*
helloWorldServer.js
*/

const http = require("http");//引用一个模块

var server = http.createServer(function(req,res){//请求对象、响应对象
    res.write("hello world");
    res.end();
});

server.listen(8080);//监听一个8080的端口
console.log("server is listening 8080");
