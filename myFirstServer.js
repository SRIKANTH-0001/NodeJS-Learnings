//Node Async 
const fs=require('fs')

//1.Diff b/w node readFileSync() and readFile() in fs module

    //1.1 readFileSync() in fs
        // console.log("Starting the execution of blocking readFileSync()....");
        // const Cdata=fs.readFileSync('Chennai.txt','utf8',);
        // console.log(Cdata);
        // console.log("__________________________----------------__________________________");
        // const Tdata=fs.readFileSync('Tamilnadu.txt','utf8');
        // console.log(Tdata);
        // console.log("End of blocking readFileSync()......");
        // console.log("__________________________----------------__________________________");
        

    //1.2 readFile() in fs
        // console.log("Starting of Non-blocking readFile() ");
        // const data1=fs.readFile('Chennai.txt','utf8',(err,data)=>{
        //     if(err) throw err;
        //     console.log(data);
        // })
        // const data2=fs.readFile('Tamilnadu.txt','utf8',(err,data)=>{
        //     if(err) throw err;
        //     console.log(data);
        // })
        // console.log("End of Non-blocking readFile().....");
        // console.log("__________________________----------------__________________________");
        
//2.Applying the transitions from Callbacks-->Promises-->async/await

    //2.1 For avoiding the callback hell only we are using the Prmises concept

    //  const data=fetch("https://jsonplaceholder.typicode.com/todos")
    //  .then((info)=>info.json())
    //  .then((details)=>details.map((detail)=>{
    //     console.log(detail.id)
    //  })).catch((err)=>console.log("Fetching failed!"+err));
     
    //2.2 For easier syntax we can go for async/await

    async function getUserId(url) {
        try {
            const data=await fetch(url);
            const details=await data.json();
            details.forEach(element => {
                console.log(element.title);
            });
        } catch (error) {
            console.log(error);
        }
    }

    getUserId("https://jsonplaceholder.typicode.com/todos");

