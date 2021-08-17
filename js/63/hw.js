(function () {
    'use strict';

    function bankAccount(balance) {
        return {
            balance: balance,
            performTransaction: function (amount) {
                this.balance = this.balance + amount;
            },
            showBalance: function () {
                console.log(this.balance);
            }
        };
    }

    let account1 = bankAccount(100);
    account1.showBalance();
    account1.performTransaction(-50);
    account1.showBalance();

    let account2 = bankAccount(1000);
    account2.showBalance();
    account2.performTransaction(200);
    account2.showBalance();

    function transaction(amount) {
        this.balance = this.balance + amount;
    }

    transaction.call(account1, 25);
    account1.showBalance();

    transaction.apply(account2, [11]);
    account2.showBalance();


})();