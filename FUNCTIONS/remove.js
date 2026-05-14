const remove = (user) =>{
return delete user.password;
}

const user = {
username: "admin",
password: "12345",
}; 
remove(user)
console.log(user);
