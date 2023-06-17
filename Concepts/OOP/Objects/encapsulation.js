function bankAccount(balance){
    let _balance =balance

    // get the balances
    this.getBalance = function(){
        return _balance
    };

    // make deposit
    this.deposit = function(amount){
        _balance +=amount
    }

    // make withdraw

    this.withdraw = function(amount){
        if(_balance>= amount){
            _balance -=amount
        }else{
            console.log(" insufficient balance")
        }
    }

}

let account = new bankAccount(100)

// account.deposit(50);
// account.withdraw(50)

console.log(account.getBalance())