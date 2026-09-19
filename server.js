import http from 'http';
import url from 'url';

const server=http.createServer((req,res)=>{

    //parse utility provided by the url modult and which is used for converting
    //Unstructured url string to structured  javascript object
    const parsedURL=url.parse(req.url,true);

    //Getting the path name from parsedURL
    const pathname=parsedURL.pathname;

    const query=parsedURL.query;

    res.writeHead(200,{'content-type':"text/plain"});

    //Displaying the found details in json stringified format
    res.end(JSON.stringify({
        pathname,
        query,
        fullURL:req.url
    },null,2))
})

server.listen(3000);