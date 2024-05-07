class BankAccount{
    customerName;

    accountNumber;

    balance = 0;

    constructor(customerName,balance=0){

        this.customerName = customerName;

        this.accountNumber = Date.now();

        this.balance = balance;

    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }
}

const bhushanAccount = new BankAccount("Bhushan",10000);

bhushanAccount.deposit(4000);

const merryAccount = new BankAccount("Merry",5000);

merryAccount.withdraw(3000);

console.log(bhushanAccount);

console.log(merryAccount);