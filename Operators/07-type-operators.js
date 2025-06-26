/* 
Type Operators: typeof(Returns the type of a variable), instanceof(	Checks if an object is an instance)
*/

let value = 5;

console.log(typeof value); // number

console.log(value instanceof Object); // false

let arr = [1, 2, 3];

console.log(typeof arr);  // object

console.log(arr instanceof Object);  // true

console.log(arr instanceof Array);  // true


let num = 5;
console.log(typeof(num));
console.log(typeof num);

// There is no difference between both of them:
// typeof num    // like: typeof operand
// typeof(num)   // parentheses used just for grouping
