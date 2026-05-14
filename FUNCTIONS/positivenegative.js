const prompt = require("prompt-sync")();
let number = Number(prompt("Enter a number: "));

const numberCheck = function (number) {
if (number > 0){
    return "It is Positive";
}
else if(number < 0){
    return "It is Negative";
}
else{
    return "It is Zero";
}
}

console.log(numberCheck(number))
