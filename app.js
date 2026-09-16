const http=require('http');
const path=require('path');

const {getCurrentDate,getCurrentTime}=require('./utils.js');

const server=http.createServer((req,res)=>{
    try {
        console.log(`Request received for ${req.url}`);
        res.writeHead(200,{'content-type':'text/html'});
        res.write(`<h1> Welcome to our App!</h1>`);
        res.write(`<p>Current Date: ${getCurrentDate()}</p>`)
        res.write(`<p>Current Time: ${getCurrentTime()}</p>`)
        res.end();
    } catch (error) {
    res.writeHead(500,{'content-type':'text/plain'});
    res.end('Internal Server Error');        
    }
});

const PORT=process.env.PORT ||3000;
server.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING AT http://localhost:${PORT}`);
});
