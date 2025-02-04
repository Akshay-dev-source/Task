// 1. Reverse a string (User Input)
function reverseString() {
    let str = prompt("Enter a string to reverse:");
    let reversed = ""; 
    for (let i = str.length - 1; i >= 0; i--) { 
        reversed += str[i]; 
    }
    console.log("Reversed string:", reversed);
}

reverseString();

//  find a even numbers  and odd numbers  in an array - [23,54,67,64,46,95,98] 

var arr = [23, 54, 67, 64, 46, 95, 98];

var evens = [];
var odds = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evens.push(arr[i]);
    } else {
        odds.push(arr[i]);
    }
}

console.log("Even numbers:", evens);
console.log("Odd numbers:", odds);



//  array - [23,54,67,64,46,95,98] 
// find evensum greater or odd sum greater


var arr = [23, 54, 67, 64, 46, 95, 98];
var evensum = 0;
var oddsum = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evensum += arr[i];
    } else {
        oddsum += arr[i];
    }
}

console.log("Even Sum:", evensum);
console.log("Odd Sum:", oddsum);

l

