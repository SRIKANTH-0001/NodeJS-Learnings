//Node async/await

//1. Sample code to async/await
    // async function getData() {
    //     console.log("Execution Started!....");
    //     const result=await asyncOperation();
    //     console.log("The result of getData function is : "+result);
    //     return result;
    // }

    // function asyncOperation(){
    //     return new Promise(resolve=>{
    //         setTimeout(()=>resolve("Created Promise becomes Fullfilled!...."),2000);
    //     })
    // }

    // getData().then(data=>console.log("The async asyncOperation is successfully Executed!..."+data));

//2. Error handling with async/await
    async function fetchData() {
        try {
            const response=await fetch("https://jsonplaceholder.typicode.com/todos");
            if(!response.ok){
                throw new Error(`Failed to fetch!${response.status}`);
            }

            const data=await response.json();
            console.log("The fetched Data is :\n ",data);
            return data;
        } catch (error) {
            console.log("Error during fetching the data..--> "+error);
            throw error;
        }
    }

    fetchData().catch(error=>console.log("Error occured!.."+error.message));