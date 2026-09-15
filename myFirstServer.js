//Error Handling in NodeJs

const fs=require('fs').promises;

async function getData(userId) {
    try {
        const response=await fs.readFile('random.json','utf8');
        
        const data=JSON.parse(response);
        const user=data.find(user=>user.id===userId)

        if(!user){
            throw new Error("Invalid userData:Missing Given userId")
        }

        console.log(data);
        
        return data;
    } catch (err) {
        if(err.code==='ENOENT'){
            throw new Error(`user Id ${userId} not Found!`)
        }else if(err instanceof SyntaxError){
            throw new Error('Invalid user data format');
        }
        throw err;
    }finally{
        console.log("Execution process is completed!...");
    }
}

(async()=>{
   try {
        const user=await getData(1324);
        console.log("Fetched Data",user);
   } catch (error) {
        console.log(error);
   }
    
})();