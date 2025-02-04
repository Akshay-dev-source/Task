// Write JavaScript code that prints all even numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
    // Check if the number is even
    if (i % 2 === 0) {
      // Print the even number
      console.log(i);
    }
  }
  
  
  // Write JavaScript code that prints all multiples of 5 up to 50.
  for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
  



// Create a JavaScript program that calculates the factorial of a given number using a for loop.

let num = prompt("Enter a number:");
let factorial = 1;

if (num < 0) {
    console.log("Factorial is not defined for negative numbers.");
} else if (num === 0 || num === 1) {
    console.log(`The factorial of ${num} is 1.`);
} else {
    for (let i = num; i >= 1; i--) {
        factorial *= i;
    }
    console.log(`The factorial of ${num} is ${factorial}.`);
}

  
  //Write JavaScript code that prints the alphabet from A to Z.
  for (let i = 65; i <= 90; i++) {
      console.log(String.fromCharCode(i)); 
  }
  




  // Write a JavaScript script that uses nested loops to 
// print a multiplication table for numbers 1 through 5.

  for (let i = 1; i <= 5; i++) {
    console.log(`Table of ${i}:`);  
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log(); 
}
// write a number to print its multiplication table
  
  let num = prompt("Enter a number to print its multiplication table:"); 
  
  console.log(`Multiplication Table of ${num}:`);
  for (let i = 1; i <= 10; i++) {
      console.log(`${num} * ${i} = ${num * i}`);
  }
  
  