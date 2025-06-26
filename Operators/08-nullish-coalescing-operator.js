/* 
Nullish Coalescing Operator: ??

Returns the right-hand operand only if the left-hand operand is null or undefined.
*/

// example 1:
let name = null;

name = name ?? "Guest";

console.log(name); // Guest

// example2:
let age = 0;

age = age ?? 18;

console.log(age);  // 0
// Because 0, "", and false are not null or undefined


/* 
What is the difference between nullish coalescing operator and || operator?

1. || operator is a common operator is can be used for any value.

2. ?? operator is dedicated only for null and undefined.
*/