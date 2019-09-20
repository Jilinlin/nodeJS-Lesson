/**
 * 1、传入命令行参数，是一个算数运算式 1*2+3
 * 2、将算数运算式计算得到结果，并且在控制台输出
 * 控制台输出1*2+3=5 eval()
 * 3、程序判断是否传入了命令行参数，如果没有传入参数，控制台输出，“命令行参数错误！”
 */

//  console.log(process.argv);
//  console.log(eval(process.argv[2]));//5

var arg1 = process.argv[2];
if(arg1 == undefined){
    console.log("命令行参数错误！");
}
else if(arg1=="-help"){
    console.log("帮助：命令行参数需要为算数运算式");
}
else{
    var result = eval(arg1);
    console.log(arg1+"="+result);
}
 

