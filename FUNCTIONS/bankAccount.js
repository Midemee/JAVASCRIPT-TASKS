const bankAccount = (account) => {

if(account.balance < 1000 )
    return "Insufficient balance";
 
else 
    return "Sufficient Balance";

};


const account = {
accountName: "David", 
balance: 500,
};

const message = bankAccount(account)
console.log(message);
