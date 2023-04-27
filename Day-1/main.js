class Account {
    constructor(a = 0, b = 0.0) {
        this.Acc_no = a;
        this.Balance = b;
    }
    debitAmount() {
        // Here comes the logic
    }
    creditAmount() {
        // Here comes the logic
    }
    getBalance() {
        return this.Balance;
    }
}
// Inheritance
class CurrentAccount extends Account {
    constructor(a = 0, b = 0, i = 0) {
        super(a, b);
        this.Interest_rate = i;
    }
    addCustomer() {
        console.log(this.Date_of_opening);
        // throw new Error("Method not implemented.");
    }
    removeCustomer() {
        // throw new Error("Method not implemented.");
    }
}
class SavingAccount extends Account {
    constructor(a = 0, b = 0, m = 0) {
        super(a, b);
        this.Min_balance = m;
    }
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}
