//8 DataTypes in js
/**
 *  1.String 
 *  2.Number
 *  3.bigInt
 *  4.Object
 *  5.undefined 
 *  6.null
 *  7.boolean
 *  8.symbol
 */

//1.String
const firstName="Vinayagar";
//Re-declaring is not possible in const variable
// firstName="Murugar";
const lastName="Sivan";

console.log(`The fullName of given name: ${firstName+lastName}`);
console.log("----------------------------------------");

//2.Number
const cgpa1=7.9;
const cgpa2=9;
const total=cgpa1+cgpa2;

console.log("Total of given cgpa:"+total);
console.log("----------------------------------------");

//3.bigInt 
// JavaScript Numbers are precise only up to 2^53 - 1.
// Use "n" or convert from a string for larger integer values.

const number=12345678901234567890n;
console.log(number);
const num=BigInt("1234567890123456789012345");
console.log(num);
console.log("----------------------------------------");

//4.Object
//Collection of data stored in the form of key:value pairs is known as "Object"

const person=new Object({
    name:"Jeniffer Lawrence",
    age:"45",
    job:"Actress",
    netWorth:"$61 Billion"
});

console.log(Object.values(person));
console.log("----------------------------------------");

//5.undefined

let age;
let name1;
console.log(age+" "+name1);
console.log("----------------------------------------");

//6.null

const score=null;
console.log(score);
console.log("----------------------------------------");

//7.boolean

const isEligible=true;
const isMarried=false;
console.log(isEligible);
console.log(isMarried);
console.log("----------------------------------------");

//8.symbol

const first = Symbol.for("id");
const second=Symbol.for("id")
    console.log(first === second);














