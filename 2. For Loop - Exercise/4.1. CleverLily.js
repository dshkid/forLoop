function cleverLilly(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let moneySaved = 0;
    let moneyGiven = 10;

    for (let birthday = 1; birthday <= age; birthday++) {
        if (birthday % 2 === 0) {
            moneySaved += moneyGiven - 1;
            moneyGiven += 10;
        } else {
            moneySaved += pricePerToy;
        }
    }
    if (moneySaved >= washingMachinePrice) {
        let moneyLeft = moneySaved - washingMachinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        moneyNeeded = washingMachinePrice - moneySaved;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}
cleverLilly(['10', '170.00', '6']);