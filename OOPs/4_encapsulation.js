class BankAccount{
    customerName;

    accountNumber;

    #balance = 0;

    constructor(customerName,balance=0){

        this.customerName = customerName;

        this.accountNumber = Date.now();

        this.#balance = balance;

    }

    deposit(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        this.#balance -= amount;
    }

    set balance(amount){
        if(isNaN(amount)){
            throw new Error("Amount is not valid input!");
        }
        this.#balance = amount;
    }

    get balance(){
        return this.#balance;
    }
}

class CurrentAccount extends BankAccount{
    transactionLimit = 50000;

    constructor(customerName,balance = 0){
        super(customerName,balance);
    }

    #calculateInterest(amount){
        console.log("Calculating Interest");
    }
    takeBusinessLoan(amount){
        this.#calculateInterest(amount);
        console.log("Taking business loan of: " + amount);
    }
}

const bhushanAccount = new CurrentAccount("Bhushan",70000);

// bhushanAccount.#balance=5000;

// bhushanAccount.setBalance(4000);

bhushanAccount.balance=5000;

bhushanAccount.takeBusinessLoan(40000);

console.log(bhushanAccount);