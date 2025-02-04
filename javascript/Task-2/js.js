// Comparing two variables using different comparison operators
// Write a JavaScript script that compares two variables using different comparison operators (==, ===, !=, !==, >, <, >=, <=) and prints the results.
let number = 5;
let string = '5';

// Print the variables and their types
console.log("numberValue is:", number, "(type:", typeof number + ")");
console.log("stringValue is:", string, "(type:", typeof string + ")");

// Compare using different operators
console.log("number == string:", number == string);  // true (same value)
console.log("number === string:", number === string); // false (different type)
console.log("number != string:", number != string); // false (values are equal)
console.log("number !== string:", number !== string); // true (different types)
console.log("number > string:", number > string); // false (both are 5)
console.log("number < string:", number < string); // false (both are 5)
console.log("number >= string:", number >= string); // true (values are equal)
console.log("number <= string:", number <= string); // true (values are equal)

//  even or odd
// Write a JavaScript script that uses the ternary operator to determine if a number is even or odd.
const userNumber = Number(prompt("Enter a number:"));
const result = (userNumber % 2 === 0) ? "even" : "odd";
console.log(`The number ${userNumber} is ${result}.`);

// Check if the user is an adult or a minor
// Expand the script to include a ternary operation that checks if a user is an adult (18+) or a minor.
let ageInput = prompt("Please enter your age:");
let age = Number(ageInput);
let status = age >= 18 ? "an adult" : "a minor";
console.log(`You are ${status}.`);

// Grade 
// Grade Classification: Declare a variable score and set it to a value between 0 and 100.
// Use nested ternary operators to classify the score into grades: A (>= 90), B (>= 75), C (>= 60), D (>= 45), and F (below 45). Log the grade.

let score = Number(prompt("Enter your score (0-100):"));
let grade = (score >= 90) ? "A" :
            (score >= 75) ? "B" :
            (score >= 60) ? "C" :
            (score >= 45) ? "D" : "F";
console.log(`Your grade is: ${grade}`);

// Temperature 
// Temperature Check: Declare a variable temperature and 
//  use nested ternary operators to categorize it as "Hot" (above 30), "Warm" (20-30), "Cool" (10-19), and "Cold" (below 10). Log the result.

let temperature = Number(prompt("Enter the temperature:"));
let tempCategory = 
  temperature > 30 ? "Hot" : 
  temperature >= 20 ? "Warm" : 
  temperature >= 10 ? "Cool" : 
  "Cold";
console.log(`The temperature is ${temperature}°C, it's definitely ${tempCategory} outside!`);

// Age Group 
//  Age Group: Declare a variable age and 
//  use the ternary operator to classify the age into "Child" (0-12), "Teen" (13-19), "Adult" (20-64), and "Senior" (65 and above). Log the result.

let userAge = Number(prompt("Enter your age:"));
let ageCategory = 
  userAge >= 65 ? "Senior" : 
  userAge >= 20 ? "Adult" : 
  userAge >= 13 ? "Teen" : 
  userAge >= 0 ? "Child" : 
  "Invalid age";
console.log(`You are ${userAge} years old, categorized as: ${ageCategory}`);
