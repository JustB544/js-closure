function createAccount(initialPin, amount) {
    let balance = amount || 0;
    let pin = initialPin;
    function checkPin(_pin, callback){
        if (_pin === pin){
            return callback();
        }
        return "Invalid PIN.";
    }
    return {
        checkBalance(_pin){
            return checkPin(_pin, () => ("$" + balance));
        },
        withdraw(_pin, money){
            return checkPin(_pin, () => {
                if (money > balance){
                    return "Withdrawal amount exceeds account balance. Transaction cancelled.";
                }
                else {
                    balance -= money;
                    return `Succesfully withdrew $${money}. Current balance: $${balance}.`;
                }
            });
        },
        deposit(_pin, money){
            return checkPin(_pin, () => {
                balance += money;
                return `Succesfully deposited $${money}. Current balance: $${balance}.`;
            });
        },
        changePin(_pin, newPin){
            return checkPin(_pin, () => {
                pin = newPin;
                return "PIN successfully changed!";
            });
        }

    }
}

module.exports = { createAccount };
