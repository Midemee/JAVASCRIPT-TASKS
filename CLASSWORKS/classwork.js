const user = {
    name: "john",
    age: 17,
};

if (user.age >= 18){
console.log("Adult")
}
else{
console.log("Minor")
}

const bioData = {
    name: "Mide",
    age: 32,
    course: "Software Engineering",
};

const car = {
    brand: "Toyota",
    year: 2020,
    color: "Black",
};

console.log(car.brand)
console.log(car["year"])


const product = { 
    price: 1200, 
    inStock: true 
};

if(product.inStock === false){
console.log("Out of stock")
}
else if(product["price"] > 1000){
console.log("Expensive")
}
else{
console.log("Affordable")
}

const student = {
    name: "Amaka", 
    score: 75,
}; 

if (student.score >= 90 ){
console.log("A")
} else if (student.score >= 80){
console.log("B")
} else if (student.score >= 70){
console.log("C")
} else{
console.log("F")
}

const order = {
    status: "pending",
};

if(order.status === "pending"){
console.log("Processing")
} else if (order.status === "shipped"){
console.log("Shipped")
} else {
console.log("delivered")
}

const account = {
    balance: 500, 
    isBlocked: false,
};

if(account.isBlocked === true){
console.log("Account blocked")
} else if(account.balance < 100){
console.log("Low balance")
} else{
console.log("Ok")
}

const userPerson = {
name: "Ada",
age: 22 
};

userPerson.email = "ashiwajuaramide@gmail.com";
console.log(userPerson)

const phone = {
    brand: "Samsung",
    color: "Blue",
    storage: "128GB" 
};

delete phone.color
console.log(phone)

let number = 2

if(number > 0){
console.log("Positive")
} else if(number < 0){
console.log("Negative")
} else {
console.log("Zero")
}

const profile = { 
    name: "Emeka",
    age: 31, 
    city: "Abuja",
    role: "Engineer" 
};

const {name} = profile;
const {city} = profile;

const personal = {
    name: "Ngozi",
    age: 25 
};

const professional = {
    ...personal,
    role: "Developer",
    company: "Semicolon"
};
console.log(professional)

isLoggedIn = true
isLoggedIn? console.log("Welcome back!"):console.log("Please log in.")

const userr = {
    points: 90 
};

if (userr.points >= 100){
console.log("Gold")
}else{
console.log("Silver")
}

const login = {
    username: "admin",
    password: "1234"
};

if (login.username === "admin" && login.password === "1234" ){
console.log("Login success")
}else{
console.log("Invalid credentials")
}

const user = {
    age: 25,
    country: "Nigeria"
};

if (user.age >= 18 && user.country === "Nigeria"){
console.log("Access Allowed")
}else {
console.log("Access denied")
}





