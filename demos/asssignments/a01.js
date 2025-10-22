// a01.ts
// Q1: Declare and initialize variables with appropriate types
var myName = "Yaseen Kola";
var myAge = 39;
var isStudent = true;
console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Is a student:", isStudent);
console.log("");
// ------------------------------------------------------------
// Q2: Create a function greetUser that takes a name (string)
//     and returns a greeting message
// ------------------------------------------------------------
function greetUser(name) {
    return "Asssalamualaikum Warahmatullahi Wabarakatuhu, ".concat(name, "! Welcome to TypeScript.");
}
// Call the function with your name and log the output
var greetingMessage = greetUser(myName);
console.log(greetingMessage);
console.log("");
// ------------------------------------------------------------
// Q3: Create an array of favorite colors (strings)
//     and print each color using a loop
// ------------------------------------------------------------
var colors = ["Red", "Blue", "Green", "Purple", "Black"];
// Print each color using a loop
console.log("My favorite colors are:");
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var color = colors_1[_i];
    console.log("-", color);
}
console.log("");
// ------------------------------------------------------------
// Q4: Factorial Function
//     - Takes a number as input and returns its factorial.
//     - Handles cases where n = 0 or n = 1 correctly.
//     - Validates that the input is a positive integer.
// ------------------------------------------------------------
function factorial(n) {
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
var num = 5;
console.log("Factorial of ".concat(num, " is:"), factorial(num));
console.log("");
// Q5: Even Odd Checker Function
function isEven(n) {
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
function sumArray(numbers) {
    // Handle empty array
    if (numbers.length === 0) {
        return 0;
    }
    // Initialize sum
    var total = 0;
    // Loop through the array and add each element
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num_1 = numbers_1[_i];
        total += num_1;
    }
    return total;
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([])); // 0
console.log(sumArray([10, 20, 30])); // 60
