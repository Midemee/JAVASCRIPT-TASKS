const prompt = require("prompt-sync")();
let day = prompt("Enter a day: ");

switch(day){

case "Monday":
case "Tuesday":
case "Wednesday":
case "Thursday":
case "Friday":
console.log("Weekday");
break;

case "Saturday":
case "Sunday":
console.log("Weekend");
break;

default:
console.log("Invalid day");

}
