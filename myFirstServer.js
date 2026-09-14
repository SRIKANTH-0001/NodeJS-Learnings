//Node Promises

const fs=require('fs').promises;

// 1. Example to callback hell

    // fs.readFile('Chennai.txt',(err,Cdata)=>{
    //     const kd= Cdata.toString();
    //     console.log(kd);
    //     console.log("------------------_____________--------------------");
    //     fs.readFile('Tamilnadu.txt',(err,Tdata)=>{
    //         if(err) throw err;
    //         const kd= Tdata.toString();
    //         console.log(kd);
    //         console.log("------------------_____________--------------------");
    //         fs.readFile('Krishnagiri.txt',(err,Kdata)=>{
    //             if(err) throw err;
    //         const kd= Kdata.toString();
    //         console.log(kd);
    //         console.log("------------------_____________--------------------");    
    //         })
    //     })   
    // })

// 2. Example to Promises

    // const promise=new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         const random=Math.random()>0.5;     
    //         console.log(random);

    //         if(random){
    //             resolve("Promise bacomes Fullfilled!...");
    //         }else{
    //             reject("Promise Becomes Rejected!...");
    //         }
    //     },1000)
    // })

    // promise.then(data=>console.log("Execution completed succesfully!.."+data),
    //             error=>console.log("Execution completed but with error!..."+error)         
    // );  


// 3. Example to that promise.all([])

    const promise1=Promise.resolve("First Promise successfully executed!");
    const promise2=new Promise((resolve)=>setTimeout(()=>resolve("Second promise executed succesfully!")));
    const promise3=fs.readFile('Krishnagiri.txt','utf-8')
    
    Promise.all([promise1,promise2,promise3]).then(()=>console.log("All the async operations are executed successfully!"))
    .catch((err)=>console.log("Execution failed!.."+err))
     .finally("This is what the use of Promise.all() Method!..")

     //Types of methods in Promise
        /*
            1.Instance Methods:  .then() , .catch() , .finally()
            2.Static methods: .all([]) , .race() , .allSettled()
            3.Utility Methods: .resolve(value) , .reject(reason)
        
        */
     