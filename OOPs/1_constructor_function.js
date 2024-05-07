//Understanding of constructor function and how we create objects

function BankAccount(customerName,balance=0){
    this.customerName = customerName;
    this.accountNumber = Date.now(); // as a example for account number
    this.balance = balance;

    this.deposit =function(amount){
        this.balance += amount;
    };

    this.withdraw =function(amount){
        this.balance -= amount;
    };
}

// const bhushanAccount = new BankAccount('Bhushan',10000);

// const mayurAccount = new BankAccount('Mayur');

// bhushanAccount.deposit(20000);

// mayurAccount.deposit(1000);

// bhushanAccount.withdraw(15000);

// console.log(bhushanAccount,mayurAccount);



// =============================================

const accounts = [];

const accountForm = document.querySelector('#accountForm');

const customerName = document.querySelector('#customerName');

const balance = document.querySelector('#balance');

const depositForm = document.querySelector('#depositForm');

const accountNumber = document.querySelector('#accountNumber');

const amount = document.querySelector('#amount');


accountForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const account = new BankAccount(customerName.value,+balance.value);
    accounts.push(account);
    console.log(accounts);
})

depositForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const account = accounts.find(
        (account) => account.accountNumber === +accountNumber.value
    );

    account.deposit(+amount.value)
    console.log(accounts);
})




