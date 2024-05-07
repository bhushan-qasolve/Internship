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

class CurrentAccount extends BankAccount{
    transactionLimit = 50000;

    constructor(customerName,balance = 0){
        super(customerName,balance);
    }

    takeBusinessLoan(amount){
        console.log("Taking business loan of: " + amount);
    }
}

class SavingAccount extends BankAccount{
    transactionLimit = 10000;

    constructor(customerName,balance = 0){
        super(customerName,balance);
    }

    takePersonalLoan(amount){
        console.log("Taking personal loan of: " + amount);
    }
}

const bhushanAccount = new SavingAccount("Bhushan",5000);
bhushanAccount.deposit(5000);
bhushanAccount.withdraw(1000);
bhushanAccount.takePersonalLoan(40000);
console.log(bhushanAccount);