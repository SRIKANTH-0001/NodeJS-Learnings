//I.Callbacks in JavaScript

//Here,that displayer function is sent as a callback to add function
  
    function displayer(res){
        console.log("The sum of given Number is : "+res);
        
    }

    function add(a,b,res){
        let sum=a+b;
        res(sum)
        // return a+b;
    }

    add(25245,2,displayer);

    // displayer(result);

    /*
     Types...
        1.Synchronous callback
            These callbacks are executed Immediately.
            Ex:-
                map(),filter(),reduce(),forEach(),sort()

        2.Asynchronous callback
            Callback function executed after that aync operation is done.
            Ex:-
                setTimout(),setInterval(),addEventListener()
    */

//II.Promises
/**
 * To create promises,
 *      syntax:
 *          const prom=new Promise((resolve,reject)=>{})
 *         where,
 *              resolve-promise retuns fullfilled with value.
 *              reject-promise return rejected state with error.
 */

    function display(text){
        text.forEach(element => {
            console.log("Fetched title:   \n",element.title);  
        });
        console.log("Execution finally finished!...");
    }

    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response)=>response.json())
    .then((res)=>display(res))
    .catch((err)=>console.log(err))
    .finally(console.log("Execution started!..."))

/*  then -- it executed when the promise is fullfilled,and it always registers a func and create a promise
    catch -- it executed when the promise is rejected
    finally -- it executed no matter what happens but after the promise settles
*/

//3.async/await keywords

/**
 * ---async used to create a promise but,that'll happen internally.
 * ---await used to hold the execution of that method only not whole js
 */

    function displaying(text){
        console.log("-------------------------------------------");
        
        text.forEach(element => {
            console.log(element.id);
            console.log("Fetched title:   \n",element.title);  
        });
        console.log("fetching is done!");
        
    }
    async function logic() {
        try {
            let res=await fetch("https://jsonplaceholder.typicode.com/todos");
            let data=await res.json();
            displaying(data);
        } catch (error) {
            displaying(error);
            
        }
    }

    logic();

