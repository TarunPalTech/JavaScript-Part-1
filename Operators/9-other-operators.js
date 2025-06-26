/* 
delete and void:

1. delete - Deletes a property from an object
2. void - Evaluates an expression and returns undefined
*/

let myObj = {
    name: "Tarun",
    age: 22,
    gender: "male"
};

delete myObj.age;

console.log(myObj.age);  // undefined


console.log(void 0);  // undefined

console.log(void "hello");  // undefined


// void discards the result of any expression
// commonly used to avoid unwanted result of codespaces