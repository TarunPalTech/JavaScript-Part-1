/* 
Concept of Memory: We all know that javascript data types can be categorised into two categories:

1. Primitive Data Types
2. Non-Primitive Data Types

However, this categorization depends on how the data is stored and accessed in memory. 
That’s the key factor behind this classification.
*/

/* 
1. Primitive Data Types: Stored directly in the stack(value based)
2. Non-Primitive Data Types: Stored as references in the heap
*/

// for examples:

// examples of primitive data types
let email = "xyz@gmail.com";
let newEmail = email;

console.log(email);  // xyz@gmail.com
console.log(newEmail); // xyz@gmail.com

// now we are going to change data of variable newEmail

newEmail = "abc@gmail.com";

console.log(newEmail);  // abc@gmail.com
console.log(email);  // xyz@gmail.com

// means there is no change in the original value because they are primitive data types that's why data of email will be copied into variable newEmail so changes will be done into the variable newEmail.


// examples of non-primitive data types

let myObj = {
  name: "Tarun",
  age: 22,
  email: "xyz@gmail.com",
};

let newObj = myObj;

console.log(myObj);
console.log(newObj);
// myObj and newObj both are containing same information like primitive data types because they are pointing to the same memory location because the reference is same

// let's see the difference

newObj.email = "abc@gmail.com";

console.log(myObj);
console.log(newObj);
// now the value of email will be can changed into both variables because they are pointing to the same memory location