//引入模块
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const queryString = require('querystring');
//引入数据
let { chapterList, userList } = require('./data');

//建立服务
http.createServer((req, res) => {
    var urlObj = url.parse(req.url);
    //根据不同路径访问不同页面
    if (urlObj.pathname == '/list') {
        //拼接路径
        var htmlPath = path.join(__dirname, "素材/chapterList.html");
        show(res, htmlPath);
    }
    else if (urlObj.pathname == '/detail') {
        var htmlPath = path.join(__dirname, "素材/chapter.html");
        show(res, htmlPath);
    }
    else if (urlObj.pathname == '/login') {
        var htmlPath = path.join(__dirname, "素材/login.html");
        show(res, htmlPath);
    }
    else if (urlObj.pathname == '/listmanager') {
        var htmlPath = path.join(__dirname, "素材/list.html");
        show(res, htmlPath);
    }
    else if (urlObj.pathname == '/addChapter') {
        var htmlPath = path.join(__dirname, "素材/addChapter.html");
        show(res, htmlPath);
    }


    else if (urlObj.pathname == '/getChapterList') {
        var str = JSON.stringify(chapterList);
        res.end(str);
    }
    else if (urlObj.pathname == '/getDetail') {
        var chapterId = queryString.parse(urlObj.query).chapterId;
        var dataList = [];
        chapterList.forEach((data, index) => {
            if (data.chapterId == chapterId) {
                dataList.push(data);
            }
        })
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var str = JSON.stringify(dataList);
        res.end(str);
    }
    //登录
    else if (urlObj.pathname == '/getlogin') {
        var postData = "";
        req.on("data", function (chunk) {
            postData += chunk;
        });
        req.on("end", function () {
            var message = queryString.parse(postData);
            var username = message.username;
            var password = message.password;
            var i = 0;
            for (i = 0; i < userList.length; i++) {
                if (userList[i].username == username && userList[i].pwd == password) {
                    data = 1;
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(data));
                    return;
                }
            }
            data = 0;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        });
    }
    //添加文章
    else if (urlObj.pathname == '/add') {
        var postData = "";
        req.on("data", function (chunk) {
            postData += chunk;
        });
        req.on("end", function () {

            var message = queryString.parse(postData);
            var title = message.title;
            var content = message.content;

            var date = new Date();
            var newP = {
                "chapterId": chapterList[chapterList.length - 1].chapterId + 1,
                "chapterName": title,
                "imgPath": "",
                "chapterDes": content,
                "chapterContent": content,
                "publishTimer": `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
                "author": "admin",
                "views": 0
            }
            chapterList.push(newP);
            data = { code: 0 };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        });
    }
    //删除文章
    else if (urlObj.pathname == "/delChapter") {
        var chapterId = queryString.parse(urlObj.query).chapterId;

        for (var i = 0; i < chapterList.length; i++) {
            if (chapterList[i].chapterId == chapterId) {
                chapterList.splice(i, 1);
                data = 1;
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(data));
                return;
            }
        }
        data = 0;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    }
    //加载js、css、png、jpg文件
    else {
        var htmlPath = path.join(__dirname, "素材", urlObj.pathname);
        if (urlObj.pathname.indexOf("js") >= 0) {
            var htmlContent = fs.readFileSync(htmlPath);
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(htmlContent);
        } else if (urlObj.pathname.indexOf("css") >= 0) {
            var htmlContent = fs.readFileSync(htmlPath);
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(htmlContent);
        } else if (urlObj.pathname.indexOf("png") >= 0) {
            var htmlContent = fs.readFileSync(htmlPath);
            res.writeHead(200, { 'Content-Type': 'image/png' });
            fs.createReadStream(htmlPath).pipe(res);
        } else if (urlObj.pathname.indexOf("jpg") >= 0 || urlObj.pathname.indexOf("jpeg") >= 0) {
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            fs.createReadStream(htmlPath).pipe(res);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plane; charset=utf-8' });
            console.log(urlObj.pathname);
        }
    }

}).listen(8083);
console.log("server is listening 8083");

//显示页面函数
function show(res, htmlPath) {
    var htmlContent = fs.readFileSync(htmlPath);
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write(htmlContent);
}