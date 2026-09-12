//Objects are used to store the collection of values like key:value pairs

//1.Creation of Objects: propName:propVal;
    // const details={
    //     id:1,
    //     name:"SRIKANTH K",
    //     age:21,
    //     qualification:"Degree",
    //     maritualStauts:false
    // }

    //OR
    const details=new Object({
        id:1,
        name:"SRIKANTH k",
        age:21,
        qualification:"Degree",
        maritualStatus:false,
        nationality:"Indian",
        myCars:{
            car1Name:"Hundai",
            car2Name:"Mahindra",
            car3Name:"Benz"
        }
    })

//2.Accessing the properties
//2.1 --Using . Notation
    console.log("My name : "+details.name);
    console.log("My age : "+details.age);
    
//2.2 --using index as propertyName
    console.log("My qualification : "+details["qualification"]);
    console.log("My maritualStauts : "+details["maritualStatus"]);

//3.Changing the Properties
    details.age=22;
    details.nationality="American";

    console.log("My Age : "+details.age+"\nMy nationality is : "+details.nationality );
//4.deleting the property
    delete details.nationality;
    console.log("After deletion of nationality if I tried to access it :"+details.nationality);
    
//5.To check that nationality is in details object or not

    let check="nationality" in details;
    console.log("is\"nationality\" property there?"+check);

//7.Accessing the nested object properties using . notation two times like following

    console.log("My third fav car Name :"+details.myCars.car3Name);
    //using index
        console.log("My first favourite car is : "+details["myCars"]["car1Name"]);
        
//8.creating and accessing the function with object and also using this keyword
    //"this" represents the parent object name
      const details2=new Object({
        id:1,
        firstName:"RAMESH",
        lastName:"KUMAR",
        age:41,
        qualification:"Degree",
        maritualStatus:true,
        nationality:"Indian",
        myCars:{
            car1Name:"Lambogini",
            car2Name:"Thor",
            car3Name:"Benz"
        },
        fullName:function(){
            return "\nMy fullName is , "+(this.firstName+this.lastName);
        }
    })

    //Accessing that function by calling it
    console.log("\nWhat's your fullName ? "+details2.fullName());
    
//9.Various displaying methods
    //9.1 using for..in loop
    console.log("---------------------------------");
    console.log("\nAll the given details....");
    
    for(let index in details2){
        console.log(details2[index]);
    }

    console.log("---------------------------------");

    //9.2 using Object.valuse() method to access property values
    console.log("Accessing only the property values!....");
    console.log(Object.values(details2));
    console.log("---------------------------------");

    
    //9.3 Accessing only the keys using Object.keys() build-in function
    console.log("Accessing only the keys!.....");
    console.log(Object.keys(details2));

    //using Object.entries
    console.log("---------------------------------");
    console.log("Using ");
    
    for(let [name,val] of Object.entries(details2)){
        console.log(name+" : "+val);
    }

    //9.4 Using JSON.stringify()
    console.log("............................................");
    console.log("\n");
    console.log(JSON.stringify(details2));
     
        
    

