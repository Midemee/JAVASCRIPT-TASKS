const carSpecs = () => {
const car = {
brand: "Toyota",
model: "Camry",
available: true
};

if (car.available == true){
return "This car is available";
}
else{
return "This car is not available";
}

}

console.log(carSpecs);
