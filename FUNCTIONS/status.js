function status(){

const order = {id: 1,status: "pending"}; 

order.status = "delivered";

return order;

}

console.log(status());
