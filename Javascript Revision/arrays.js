//In Js array is a object type and it's used to store the collection of Hetrogeneous data

//1. Creation of array 
    //1.1 using []
        let fruits=["apple","banana","orange","guava","grapes"];
        console.log("fruits Name : \n"+fruits);
        console.log("_____________________________________\n");
        
        
    //1.2 using Array constructor
        let vegetables=new Array("Carrot","cabbage","beetroot","drumstick");
        console.log("vegitables Name : \n"+vegetables);
        console.log("_____________________________________\n");
        /*Syntax	                    Description
        new Array()	                Creates an empty array.
        new Array(x)	            Creates an array with x empty spots.
        new Array(elem1)	        Creates an array with one element.
        new Array(elem1,...,elemN)	Creates an array with multiple elements.*/

//2.Adding the elements on empty array
        let numbers=[];
        numbers[0]=10;
        numbers[1]=11;
        numbers[2]=12;

        console.log("The numbers array contains : \n"+numbers);
        console.log("_____________________________________\n");
    
//3.Converting the fruits array into string
        console.log("After converting fruits array  : \n"+fruits.toString());
        console.log("_____________________________________\n");

//4.checking the tyoe of array
        console.log("The data type of the array is : \n"+typeof(fruits));
        console.log("_____________________________________\n");

//5. Array Iterative methods
        //5.1 for..of
                //Used to iterate through the elements or values
        let num=[31,10,26,33,41,1000,57,62,100];
        let sum=0;
        for(let val of num){
                //Here val represents the values 
                console.log(val);
                //Finding total sum
                sum+=val;
        };
        console.log("Sum of all the digit is : "+sum);
        console.log("_____________________________________");
        

        //5.2 Applying for...in on fruits array

        for(let val in fruits){
                //Here,that val represents the index
                console.log(val);
        } 

        console.log("_____________________________________");

        // 5.3 Applying .forEach() on num array

        //Displaying whether the elements are odd or even
        console.log(`Index value Even or Odd`);
        num.forEach((val,index)=>{
                if(val%2==0) console.log(`${index} ${val} Even`);
                else console.log(`${index} ${val} Odd`);
        })
        console.log("_____________________________________");

//6.How the sort method differs for string array and number array
        //6.1 fruits string array
        console.log("Sorted fruits array!.......");
        console.log(fruits.sort());
        
        //6.2 num number array
        console.log("_____________________________________");
        console.log("Sorted num array using same sort() method!.......");
        //On previous method 100 is placed at first index cz,By default it takes the input as string  
        console.log(num.sort());
        console.log("Sorting num array using comparision Function!..");
        console.log(num.sort((a,b)=>a-b));
        console.log("_____________________________________");


        
        
        
        

        
        
        