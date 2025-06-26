/* 
Type Conversion Functions in JavaScript:

1. Number()
2. String()
3. Boolean()
*/

// Number:

let number = "123";

console.log(typeof Number(number)); // number

console.log(parseInt(number));  // 123

console.log(typeof parseInt(number));  // number

let floatNumber ="123.25";
console.log(typeof parseFloat(floatNumber));  // number

console.log(parseFloat(floatNumber));  // 123.25

console.log(Number(floatNumber));  // 123.25


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


/* 
What is a basic difference between Number() and parseInt() or parseFloat()
*/

let value = "123px";
console.log(typeof value);  // number

console.log(Number(value));  // NaN

console.log(parseInt(value));  // 123

let floatValue = "123.25px";
console.log(parseFloat(floatValue));  // 123.25

console.log(parseInt("px25"));  // NaN

console.log(Number(null));  // 0

console.log(Number(undefined));  // NaN


// String:

let myString = 123;
console.log(String(myString));  // 123

console.log(typeof String(myString));  // string

console.log(typeof toString(myString));  // string

console.log(typeof (myString + ""));  // string 

// Boolean:

console.log(Boolean(123)); // true

console.log(!!"Hello");  // true

console.log(2 * "5");  // 10

console.log(typeof (2 * "5"));  // number

console.log(2 + "5");  // string

console.log(typeof (2+"5"));  // 25

console.log(+true);  // 1

console.log(true + 1);  // 2

console.log(null + 1);  // 1

console.log(undefined + 1);  // NaN

console.log(Boolean(""));

console.log(Boolean("tarun")); // true

console.log(Boolean(false)); // false

console.log(Boolean(null)); // false

console.log(Boolean(0));  // false


console.log(Boolean("false"));  // true

console.log(Boolean("null"));  // true

console.log(Boolean("0"));  // true

/* 
Difference between String() and toString():

String(): function

--> Converts any value to a string. Safe to use if the value is null or undefined. Calls the internal toString conversion algorithm.

toString(): method 

--> Calls the toString method on the object. Can throw an error if the value is null or undefined, because they don't have a toString method.
*/

console.log(typeof [1,2,3].toString()); // string (this is the correct approach)

console.log(Object.toString(1,2,3)); // returns a function object

console.log(toString(1,2,3)); // returns [object Undefined]

// toString always returns string value


/* 
JSON.stringify(): converts object to JSON string
JSON.parse(): converts JSON string to object
*/

let myObj = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  isStudent: false,
};

console.log(JSON.stringify(myObj));  // {"name":"John Doe","age":30,"email":"john.doe@example.com","isStudent":false}

console.log(typeof JSON.stringify(myObj));  // string

let jsonString =
  '{"name":"John Doe","age":30,"email":"john.doe@example.com","isStudent":false}';

console.log(JSON.parse(jsonString));

// {
//   name: 'John Doe',
//   age: 30,
//   email: 'john.doe@example.com',
//   isStudent: false
// }