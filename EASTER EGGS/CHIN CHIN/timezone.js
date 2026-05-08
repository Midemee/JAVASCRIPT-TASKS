const prompt = require("prompt-sync")()

	let hour = +prompt("Enter current hour within 0-23: ");

	if (hour >= 7) {
	console.log("Good Morning");
	}
	else if (hour >= 12) {
	console.log("Good Afternoon");
	}
	else if (hour >= 4) {
	console.log("Good Evening");
	}
	else if (hour >= 10) {
	console.log("Good Night");
	}
	else {
	console.log("Invalid hour");
	}
