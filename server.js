var express = require('express');
var httpProxy = require('http-proxy-middleware');
var app = express();
var option1 = {
    target: 'http://www.lanoukeji.cn',
    changeOrigin: true,
    pathRewrite: {
        '^/api' : ''
    }
};
var option2 = {
    target: 'http://v.juhe.cn',
    changeOrigin: true,
    pathRewrite: {
        '^/list' : ''
    }
};
var option3 = {
    target: 'http://www.runoob.com',
    changeOrigin: true,
    pathRewrite: {
        '^/runoob' : ''
    }
};
app.use('/api',httpProxy(option1));
app.use('/list',httpProxy(option2));
app.use('/runoob',httpProxy(option3));

app.all("*", function (req, res) { 
    // __dirname lesson8/node/....
    res.sendFile(__dirname + req.url);
}).listen(8888,"127.0.0.1",function(error){
    if(error){
        console.log(error);
        return;
    }
    console.log("服务器启动成功，服务器地址是:127.0.0.1:8888");
});