const prompt = require("prompt-sync")()
let takeOff = +prompt("Enter take off speed v in m/s: ")
let acceleration = +prompt("Enter acceleration a in m/s: ")

let length = (takeOff * takeOff) / (2 * acceleration)
console.log("The minimum runaway length is: " + length.toFixed(2))
