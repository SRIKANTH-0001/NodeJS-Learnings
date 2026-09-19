import http from 'http'
import {URL} from 'url'
import queryString from 'querystring'

const server=http.createServer((req,res)=>{
    const baseURL="http://"+req.headers.host+"/";
    const parsedURL=new URL(req.url,baseURL);

    const params=Object.fromEntries(parsedURL.searchParams);

    const queryObj={
        name:"SRIKANTH K",
        age:"30",
        interests:["Coding","Coding","Coding"]
    }

    const queryStr=queryString.stringify(queryObj);

    res.writeHead(200,{'content-type':'text/plain'});

    res.end(JSON.stringify({
        path:parsedURL.pathname,
        params,
        exampleQueryStr:queryStr
    },null,2))
})

server.listen(3000)