function bankAccount(){

const account = {
accountName: "David", 
balance: 500,
}; 

if(account.balance < 1000 )
    return "Insufficient balance";
 
else 
    return "Sufficient Balance";

};

console.log(bankAccount());
