const prompt = require("prompt-sync")();
let number1 = Number(prompt("Enter the first number: "));
let number2 = Number(prompt("Enter the second number: "));
let number3 = Number(prompt("Enter the third number: "));
const squareA = number1 * number1
console.log("SquareA: ", squareA)
const squareB = number2 * number2
console.log("SquareB: ", squareB)
const sum = squareA + squareB
console.log("Sum of squares: ", sum)
console.log("Average: ", (number1 + number2 + number3) / 3)
console.log("Product: ", number1 * number2 * number3) 

let largest = number1
if (number2 > largest){
    largest = number2
}
if (number3 > largest){
    largest = number3
}
console.log("Largest: ", largest)

let numbercheck = Number(prompt("Enter a number: "))
if (numbercheck % 3 == 0){
    console.log(numbercheck, " is divisible by 3")
}
else{
    console.log(numbercheck, " is not divisible by 3")
}

let numbercheck1 = Number(prompt("Enter a number: "))
if (numbercheck1 > 0){
    console.log(numbercheck1, " is positive")
}
else{
    console.log(numbercheck1, " is negative")
}
