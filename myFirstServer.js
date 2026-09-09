let http=require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":'text/html'});
    res.end('Hello World');
}).listen(5000);