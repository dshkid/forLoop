function numberFrom1ToN(input) {
    let number = Number(input[0]);

    for (let num = 1; num <= number; num += 3) {
        console.log(num);
    }
}
numberFrom1ToN(['15']);