class bankAccount{
    constructor(balance){
        this.balance =balance
    }
    

    // get balance
    getBalance(){
        return this.balance
    }

    // make deposit
    deposit(amount){
        this.balance +=amount
        return this.balance
    }

    // make withdraw
    withdraw(amount){
        if(this.balance >= amount){
            this.balance -=amount
            return this.balance
        }
    }
}

let myAccount = new bankAccount(100)

console.log(myAccount.withdraw(100))