//Execution of NodeJs with event loop concepts

//1.synchronous
console.log("Sunc Start");

//2.nextTick()
process.nextTick(()=>console.log("NextTick function..."));

//3.Timer functions
setTimeout(() => {
    console.log("Timer function");
}, 0);

//3.From microTask Queue -Promises
Promise.resolve().then(()=>console.log("Promises code..."));

//4. setImmediate callbacks
setImmediate(()=>console.log("setImmediate Callback function..."))

//1.synchronous
console.log("Sync End");

