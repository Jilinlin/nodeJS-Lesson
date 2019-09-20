window.setInterval(function loop(){
    console.log("I will loop forever");
},500);

setTimeout(loop.bind(loop),5000);