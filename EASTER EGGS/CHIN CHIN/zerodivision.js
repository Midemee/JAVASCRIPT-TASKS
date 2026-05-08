const prompt = require("prompt-sync")()

	let m = +prompt("Enter an integer for m: ");

	let n = +prompt("Enter an integer for n: ");

	if (n != 0) {
	const result = m / n;
	console.log("The result is: ", result.toFixed(2));	
	}
	else {
	console.log("Error, cannot be divided by zero");
	}
