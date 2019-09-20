const http = require("http");
const fs = require("fs");
const path = require("path");

/**
 * 1、将图片的二进制数据转化为base64的编码格式；
 * 将base64字符编码直接存到网页中，浏览器可以识别该编码的，
 * 将编码转化为一个图片进行显示
 * 2、将图片的base64编码直接嵌入网页适用于图片较小、减少http的请求数量
 * 提高页面性能
 */

http.createServer(function(req,res){
    //找到图片路径
    var imgPath = path.join(__dirname,"/1.jpg");
    //文件读取操作 读取一个图片 读取得到buffer数据
    var imgBuffer =fs.readFileSync(imgPath);
    var base64Data = imgBuffer.toString("base64");
    // console.log(base64Data);
    var imgSrc = "data:image/jpg;base64,"+base64Data;
    var htmlStr = "<!DOCTYPE html><head></head>"+"<body><img src='"+imgSrc+"'/><body>"+"</html>"; //把图片数据直接放到网页里
    res.writeHead(200,{"Content-type":"text/html"});//响应头
    res.write(htmlStr);
    res.end();
}).listen(8081);

console.log("sever is listening 8081");