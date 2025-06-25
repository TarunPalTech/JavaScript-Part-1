/* Variable Declartion in JavaScript */

/* 
JavaScript provides three different keywords to declare variables:

1. let
2. var
3. const

But, we have four different methods to declare variables.
*/

// 1st Method:

let accountNumber = 20001546561;
console.log(accountNumber);

// 2nd Method:

var accountHolderName = "Darwin Blake";
console.log(accountHolderName);

// 3rd Method:

const gender = "Male";
console.log(gender);

// 4th Method:It is not recommended and if you are not going to assign value to your variable while using 4th method then its an error.
accountCity = "Jaipur";
console.log(accountCity);

console.table([accountHolderName, accountNumber, gender, accountCity])  //It takes values in the form of array and displays data in the form of table...

/* 
But, there are so many differences between these methods such as:

1. let: follows the concept of block scope or functional scope
2. var: It's not recommended because of issue in block scope or functional scope.
3. const: It is similar to let but can't be modified.
*/

let value = 456;
console.log(value);

value = 450;  // It can be modify like this...
console.log("Updated value is:" + myValue);


var myName = "Tarun";
console.log(myName);

myName = "Tarun Pal"; // It can also be modify like this...
console.log(myName);


const email = "xyz@gmail.com";
console.log(email);

// email = "abc@gmail.com";  // error, because value of a const variable can't be modified...
// console.log(email);
