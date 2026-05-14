const userDetails = () => {
const user = {
name: "Amaka",
age: 25,
country: "Nigeria"
}; 
let {name, age} = user;
return {name, age};
}

console.log(userDetails());
