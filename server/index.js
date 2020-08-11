const http = require('http');
const path = require('path');
const {readContent} = require('./utils');
// const url = require('url');

const fs = require('fs');

const actionMap = [
    {
        uri:/^\/home/,
        handler:(req,res)=>{
            console.log('home!!');

            let data = fs.readFileSync(path.join(__dirname,'../dist/html/index.html'),'utf8');
            console.log(data)

            res.write(data);
            res.end();


        }
    },
    {
        uri:/^\/static/,
        handler:(req,res)=>{
            console.log('static',req.url);

            const filePath =  req.url.replace(/^\/static/, '');
            console.log(filePath);

            readContent(path.join(__dirname,'../dist/static/js/index.js'))
            .then(data=>{
                // console.log(data)
                res.write(data);
                res.end();
            })
        }
    },
    {
        uri: /^\/list/,
        handler:(req, res)=>{
            readContent(path.join(__dirname,'../mock/list.json'))
            .then(data=>{
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.write(data);
                res.end();
            })
        }
    }
    
]


const server = http.createServer((req,res)=>{
    console.log("res::",req.url)
    // 收到请求 RPC
    const actions = actionMap.filter(({uri}) => uri.exec(req.url));
    console.log('actions:::',actions)
    actions.forEach(action => action.handler(req, res));
})

server.listen(3001,()=>{
    console.log('server is running on htttp://localhost:3001')
})