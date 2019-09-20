/**
 * 进程中的输入流、输出流
 * process.stdin 输入流
 * process.stdout 输出流
 */

//  //回调函数 在输入完敲击回车时执行
//  var i = 0;
//  process.stdin.on("data",function(data){
//     // console.log(data);//二进制数据
//     // console.log(data.toString());
//     i++;
//     if(i==4){
//         process.exit();
//     }
//     else{
//         console.log(data.toString());
//     }
//  })


 var obj = {};//接受对象
 var message = ['Nmae','Email','QQ','Mobile'];//定义数组存储信息
 var i = 1;//定义索引


 console.log(message[0]+':');
 //接受用户输入 进程对象的stdin
 process.stdin.on("data",function(data){//当执行特定操作时才执行 输入数组
    obj[message[i-1]]=data.toString("utf8");
    if(i==4){
        console.log(obj);
        process.exit();
    }
    else{
        console.log(message[i++]+":");
    }
 })

