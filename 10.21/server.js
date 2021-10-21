//引入express
const express = require('express');

//创建应用对象
const app = express();

//创建路由规则
app.get('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('hello aja');
});
app.post('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('hello a');
});
app.all('/json-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    const data = {
        name: 'aaa'
    };
    let str = JSON.stringify(data);
    response.send(str);
});
//IE
app.get('/ie', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('hello IE -2');
});
//延时响应
app.get('/delay', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //定时器
    setTimeout(() => {
        response.send('延时效果');
    }, 3000);
    // response.send('ddwdw');
});
//axios
app.all('/axios-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    const data = { name: 'qiao' };
    response.send(JSON.stringify(data));
});
//fetch
app.all('/fetch-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    const data = { name: 'qiao' };
    response.send(JSON.stringify(data));
});
app.all('/cors-server',(request,response)=>{
    //设置响应头  实现跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('hello cors');
})
//监听端口
app.listen(8000, () => {
    console.log('服务已启动,8000端口监听中...');
});