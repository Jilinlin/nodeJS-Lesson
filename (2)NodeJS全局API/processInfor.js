/**
 * process属性
 * 进程信息
 * process 进程 进程的一些信息属性
 * process.pid 进程的id值，唯一标识，可以根据他找到进程
 * process.platform运行所在的平台
 * process.argv 获取命令行参数 
 *   process.argv 是一个数组，默认会有两个数组元素 
 *   第一个process.argv[0]表示的node的可执行文件所在的路径
 *   第二个process.argv[1]表示当前执行脚本文件所在的路径
 *   第三个process.argv[2]2以后的表示的是传入的命令行参数
 *   node processInfor.js -help -h 参数一 参数二 从第三个参数开始是自己传的
 *   传的参数 告诉脚本要做什么 传的指令
 * process.cwd()表示当前脚本执行所在的路径
 */

 console.log(process.pid);
 console.log(process.platform);
 console.log(process.argv);
 console.log(process.cwd());

 console.log("当前进程运行所在的操作系统平台："+process.platform);
 console.log("当前进程的id："+process.pid);
 console.log("当前执行程序的可执行文件路径："+process.argv[0]);
 console.log("当前执行程序的脚本文件路径："+process.argv[1]);
 console.log("进程的当前工作目录："+process.cwd());
 console.log("V8引擎内存分配："+process.memoryUsage().heapTotal+"内存正在使用大小："+process.memoryUsage().heapUsed);

 /**
  * process方法
  * 
  */
