"Use Strict"

// First Question:
// Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo" ; 
console.log(carName);


// Second Question:
// On one single line, declare three variables with the following names and values:

// firstName = "John"
// lastName = "Doe"
// age = 35

// So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
// 3rd Variable Name And Values Both! 

//  let ... = "John";  // write variable name
// let lastName = "..." //write variable values 
// let ... = ... ; // write variable name and values both 


let firstName = "John";
let lastName = "Doe";
let age = 35;

let personInfo = ["John", "Doe", 35];

console.log(personInfo);


// Third question
// Use the correct assignment operator that will 
// result in x being 50 (same as x = x * y). 

// x = 10;
// y = 5;
// x = ... // what will be the value of x ? 

let x = 10;
let y = 5;

console.log(x *= y) ;

// Forth question

// Use comments to describe the correct data type of the following variables:

// let length = 16; // data type ? 
// let lastName = "Johnson"; // data type ? 

// const x = {
//   firstName: "John",  
//   lastName: "Doe"
// };    // data type ? 


// ANSWER OF QUESTION NO. 4:
 let length = 16 ; // data type NUMBER
 let LastName = "Johnson"; // data type STRING

 const info = {
    firstName: "John",  
    LastName: "Doe"
  };    // data type OBJECT


// Fifth Question

// Execute the function named myFunction.
 
//  function myFunction() {
//     alert("Hello World!");
//   }
  
  // call the function and see the output 

  function myFunction() {
    console.log("Hello World!");
  }
  myFunction();

//   Sixth Question
// 1. Create an object called person with name = John, age = 50, Then,
// access the object to alert("John is 50").

let personalInfo = {
    personName: "John",
    personAge: 50,
};

console.log(personalInfo.personName + " " + "is" + " " + personalInfo.personAge);

// Seventh Question
// 1. The <button> element should do something when someone clicks on it. Try to fix it!
//<button>Click me.</button>  

// Answer of Seventh Question

// <button onclick="myFunction()">Click me.</button>

{/* <script src="script.js">
  function myFunction() {
    alert("Thanks a lot for Clicking me!");
  }
</script> */}



//Eighth Question 
// 1. Alert the number of items in an array, using the correct Array property: 

// const cars = ["Volvo", "Jeep", "Mercedes"];


// 2. Change the first item of Brand to "Ford".

// 	const Brand = ["Volvo", "Jeep", "Mercedes"]; 


const cars = ["volvo" , "Jeep" , "Mercedes"];

let carsLength = cars.length;
console.log(carsLength) // the array length is 3

const Brand = ["Volvo", "Jeep", "Mercedes"]; 

Brand[0] = "Ford";

console.log(Brand);


// 
// 1. Use the correct Math method to create a random number.

// 2. Use the correct Math method to return the largest number of 10 and 20.

// 3. Use the correct Math method to get the square root of 9.

// Answer of 9.1 no. question:
let random = Math.random();
console.log(random);

// Answer of 9.2 no. question:
let max = Math.max(10 , 20);
console.log(max);

// Answer of 9.3 no. question:
let sqrt = Math.sqrt(9);
console.log(sqrt);



// Tenth Question:

// 1. Choose the correct comparison operator to alert true, when x is greater than y. 
// x = 10;
// y = 5;

// alert() // ? 



// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

// Answer of 10.1 no. question

let m = 10;
let n = 5;

if(m > n){
 console.log("m is greater than n")
}
else if(m == n){
  console.log("m is equal to n")
}
else{
  console.log("m is less than n")
}

// answer of 10.2 no. question

let Age = 18;
let alert = Age<18 ? "Too young" : "Old enough"; 

console.log(alert);