/* 
JavaScript provides two kinds of data types:

1. Primitive Data Types(Primary Data Types)
2. Non-Primtive Data Types(Secondary Data Types)

But why do we convert it into two categories:
Because, how can be store or access data into memory that is the important thing to categorise the data.

Primary Data Types: Call by value (means whenever you are going to assign them to another variable the data will be copied not reference so if you are going to perform any change in variable then only it will be changed not the original one.)

1. Number - 2^53
2. String - ""
3. BigInt - Used to represent scientific values
4. Symbol - uniqueness
5. Undefined - when value isn't defined 
6. Null - standalone value(absence of value)
7. Boolean - true/false

Non-Primtive Data Types:  Reference Type

Object(function, array etc.)
*/

// typeof - It is used to find type of a variable or value....

let value = 123;
console.log(typeof value); // number

let myName = "Tarun Pal"; // string
console.log(typeof myName);

let myValue = 156456415546511n; // bigint
console.log(typeof myValue);

let isLoggedIn = true;
console.log(typeof isLoggedIn); // boolean

let temperature = null;
console.log(typeof temperature); // object

let city;
console.log(typeof city); // undefined

let uniqueValue = Symbol("123");
console.log(typeof uniqueValue); // symbol

/* Type of Non-Primtive Data Types */

let myArr = [1, 2, 3, 4, 5, 6];
console.log(typeof myArr);  // object

let myObj = { name: "Tarun Pal", age: 22, gender: "male" };
console.log(typeof myObj);  // object

let myFunction = function(){
    console.log(`Welcome!`);
}
console.log(typeof myFunction);  // function


/* 
Important: data type of function is function but technically they are objects because they have properties and methods.

But, typeof operator has a special rule:
typeof <function> === "function"
   This helps developers easily distiguish between general objects and executable function obects...
*/

// Let's verify function is an object or not...

console.log(function(){} instanceof Object);  // true
