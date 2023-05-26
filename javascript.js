// DATA TYPES

// Boolean -True or False
// Null - No value (typeof = Object)
// Undefined - defined var with no value
//Number - 
//String - Array if characters
// Symbol - Unique Value

let b = Math.ceil(4.5);

let v = Math.floor(8.4);


console.log(b);
console.log(v);


// simple addition

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5

// square function


function square(x) {
  return x * x;
}

console.log(square(4)); // Output: 16

// Array sum function

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(arraySum([1, 2, 3, 4, 5])); // Output: 15

// string reversal function

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello')); // Output: 'olleH'


// factorial function

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

