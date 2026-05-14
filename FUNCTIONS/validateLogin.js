const prompt = require("prompt-sync")();
username = prompt("Enter your username: ");
password = prompt("Enter the password: ");

function validateLogin(username, password){
if(username.toLowerCase() == "midemee" && password == "1234"){
return "Login Successful";
}
else{
return "Invalid username and password";
}
}

console.log(validateLogin(username, password));
