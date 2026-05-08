const prompt = require("prompt-sync")()

let base = +prompt("Enter the base of a triangle: ");
let height = +prompt("Enter the height of a triangle: ");

const area = 0.5 * base * height;

console.log("Area of triangle: ", area.toFixed(2));
