// a01.ts
// Q1: Declare and initialize variables with appropriate types

let myName: string = "Yaseen Kola";
let myAge: number = 39;
let isStudent: boolean = true;

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Is a student:", isStudent);
console.log("");

// ------------------------------------------------------------
// Q2: Create a function greetUser that takes a name (string)
//     and returns a greeting message
// ------------------------------------------------------------

function greetUser(name: string): string {
  return `Asssalamualaikum Warahmatullahi Wabarakatuhu, ${name}! Welcome to TypeScript.`;
}

// Call the function with your name and log the output
let greetingMessage: string = greetUser(myName);
console.log(greetingMessage);
console.log("");

// ------------------------------------------------------------
// Q3: Create an array of favorite colors (strings)
//     and print each color using a loop
// ------------------------------------------------------------

let colors: string[] = ["Red", "Blue", "Green", "Purple", "Black"];

// Print each color using a loop
console.log("My favorite colors are:");
for (let color of colors) {
  console.log("-", color);
}
console.log("");

// ------------------------------------------------------------
// Q4: Factorial Function
//     - Takes a number as input and returns its factorial.
//     - Handles cases where n = 0 or n = 1 correctly.
//     - Validates that the input is a positive integer.
// ------------------------------------------------------------

function factorial(n: number): number {
  // Validate input
  if (n < 0 || n % 1 !== 0) {
    {
      throw new Error("Input must be a non-negative integer.");
    }
  }
  // Base cases
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive approach
  return n * factorial(n - 1);
}

let num: number = 5;
console.log(`Factorial of ${num} is:`, factorial(num));
console.log("");

// Q5: Even Odd Checker Function
function isEven(n: number): boolean {
  // Validate input (must be a non-negative integer)
  if (n < 0 || n % 1 !== 0) {
    throw new Error("Input must be a non-negative integer.");
  }

  // Return true for even numbers, false for odd numbers
  return n % 2 === 0;
}

// Test the function
console.log(isEven(7)); // false
console.log(isEven(8)); // true
console.log(isEven(0)); // true
console.log("");


// Q6: Sum of Array Elements
function sumArray(numbers: number[]): number {
  // Handle empty array
  if (numbers.length === 0) {
    return 0;
  }

  // Initialize sum
  let total: number = 0;

  // Loop through the array and add each element
  for (let num of numbers) {
    total += num;
  }

  return total;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([]));              // 0
console.log(sumArray([10, 20, 30]));    // 60
