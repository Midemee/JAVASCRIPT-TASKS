const phone = {
brand: "Samsung",
battery: 75
};

function battery(phone){

 return phone.battery;
}

/*console.log(battery(phone));*/
console.log(`Battery Percentage: ${battery(phone)}%`);

const percentage = battery(phone)
console.log(`Battery percentage is: ${percentage}%`)
