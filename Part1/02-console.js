/* 
Console: In JavaScript, console is a built-in global object that provide access to the browser's debugging console.

1. It is used for debugging
2. To display output instead of alert 
3. To test code
*/

// There are some common methods og Console:

// 1. console.log() -> Prints general message

let x = 5;
console.log(x); // Prints general message

/* 
console.log(message);
console --> global object
log() --> method of that object
message --> It can be an value such as number, string, array etc.
*/

// 2. console.error() -> Prints an error message

console.error("Something went wrong!");

// 3. console.table() -> displays data in the form of table

let a = 1,
  b = 2,
  c = 3,
  d = 4;

console.table([a, b, c, d]);

// 4. console.warn() -> prints warning message

console.warn("This is a warning!");

// 5. console.clear() -> clears the console screen

console.clear();