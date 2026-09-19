import http from 'http';

const server=http.createServer((req,res)=>{

    //Getting the Requesting URL and the method
    
    const {method,url}=req;

    //Requesting for the headers
        //console.log(req.headers);
    
    //getting the user agents and accepting languages
    const userAgent=req.headers['user-agent'];
    const acceptLanguage=req.headers['accept-language']
    const cookie=req.headers['cookie']
    const host=req.headers['host']
    const loc=req.headers['location'] 

    //WriteHead used to send the status code and content type and we can give multiple content types also
    res.writeHead(200,{
        'content-type':'text/plain',
        'x-powered-by':'Node.js',
        'cache-control':'no-cache,no-store,must-revalidate',
        'set-cookie':'sessionid=abc123;HttpOnly'
    });
    res.end(`The req for ${method} in URL ${url}`)
    //res.end(`You made the ${loc} request for the ${host}`)
    //res.end(`User agent is ${userAgent} and \nAccepting language is ${acceptLanguage}`);
})

const PORT=3000;

server.listen(PORT,"localhost",()=>{
    console.log("Server is Listening at http://localhost:3000");
    
})
