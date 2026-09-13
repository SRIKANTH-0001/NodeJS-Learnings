const fs=require('fs');

//Ex-1:
    //Blocking File read(synchronous)...

    // console.log("Blocking File reading is started!...");
    // const data=fs.readFileSync('sample.txt','utf8');
    // console.log(data);
    // console.log("Blocking File reading is Completed!...");


    //Non-Blocking file read (Asynchronous)
    console.log("-----___________________________________________-----");
    

    console.log("Non-Blocking file reading is started!...");

    const result=fs.readFile('sample.txt','utf8',(err,data)=>{
        if(err) throw err;
        console.log(data)
    })

    console.log("In Non-Blocking file read this line should run before file read!..");
    console.log("-----___________________________________________-----");

    
//Ex-2

    //Blocking File read(synchronous)..readFileSync() blocks the timeout()
        // console.log('1. Before reading');

        // setTimeout(() => {
        //     console.log('4. Timer executed');
        // }, 0);

        // const data1=fs.readFileSync('sample.txt', 'utf8');

        // console.log('2. File reading completed');
        // console.log('3. After reading');

    //Non-Blocking file read (Asynchronous)-readFile() not blocks the timeout()
        console.log("-----___________________________________________-----");
        

        // console.log('1. Before reading');

        // setTimeout(() => {
        //     console.log('4. Timer executed');
        // }, 0);

        // fs.readFile('sample.txt', 'utf8', (err, data) => {
        //     if (err) throw err;
        //     console.log('3. File reading completed');
        // });

        // console.log('2. After starting reading');



    





