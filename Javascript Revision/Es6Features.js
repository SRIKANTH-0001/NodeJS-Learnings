/** ES6+ Features as follows
        ----------React ES6------------
        Arrow Functions---const var=(parameters)=>{----statements-------}
        Variables---------let(can change the value),const(can't change the value),var(depricated)
        Modules-----------named export - import(without {anyName}),default export -import(with {sameName})
        Template Strings--Used to add external data in the string uses (``) for including the value (`${variableaName}`)
        1.Array map()
        2.Destructuring using Spread Operator
        3.Ternary Operator
        
 * 
 */

        //1.Map Method
        //create a new array and calls a function for every element: array.map((val,index,array)=>{---statements---})
        let nums=[115,154,657,14,66,26,890,345];
        console.log(nums.entries());
        console.log("_____________________________________");
        
        console.log("Square of the given Elements!.........");
        
        nums.map((val)=>{console.log(`Square of ${val} : `+val*val);});
        console.log("_____________________________________");

        //2. Destructuing the nums array using ...spread operator
        const [first,second,...rest]=nums;
        console.log("First Element is : "+first);
        console.log("Second Element is : "+second);
        console.log("Remaining elements are : "+rest);
        console.log("_____________________________________");

        //2.1 Destructuring the object
        let myDetails={
            id:1,
            name:"SRIKANTH K",
            age:21,
            qualification:"Degree",
            maritualStatus:false,
            nationality:"Indian",
            myCars:{
                car1Name:"Hundai",
                car2Name:"Mahindra",
                car3Name:"Benz"
            }
        }

        let {name,age,myCars:{...cars}}=myDetails;
        console.log("My Name is : "+name);
        console.log("My age is : "+age);
        // console.log("My favourite cars : \n"+JSON.stringify(cars));
        console.log("My favourite car names are :");
        console.log(cars);
        console.log("_____________________________________");
        

        //3.Ternary Operator
        let num=187651;
        console.log("Check whether the given number is Even or Odd using Ternary operator!");
        console.log(num%2==0?"Even":"Odd");
        


        
        
        
        
        
        
        

