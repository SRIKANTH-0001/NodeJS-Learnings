let http=require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":'text/html'});
    res.end('Hello World');
}).listen(5000);

console.log(this);
console.log("_____________________________________");

//1.Diff b/w Browsers and NodeJs
    //1.1 Global Object in Node
        global.mylet=29875;
        console.log(global.mylet);
    //1.2 Window Object in Browser
        // window.myconst=319485;
        // console.log(window.myconst);
        // 319485
    console.log("_____________________________________");

//2.HTTP requests
    //2.1 NodeJs
        // const https=require('https');

        // https.get('https://jsonplaceholder.typicode.com/todos',res=>{
        //     let data=' ';
        //     res.on('data',chunk=>data+=chunk);
        //     res.on('end',()=>console.log(data));
        // })
        // console.log("_____________________________________");

    //2.2 Browser
        //fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.text()).then(data=>console.log(data));

//3.Modules
    //3.1 NodeJs == require('fs')
    //3.2 Browser ==import fs from 'fs'

//4.Command line arguments
console.log('Arguments:', process.argv);





