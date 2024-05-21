function numDivisibleBy9(input) {
    let min = Number(input[0]);
    let max = Number(input[1]);
    let sum = 0;

    for (let num = min; num <= max; num++) {
        if (num % 9 === 0) {
            sum += num;
        }
    }
    console.log(`The sum: ${sum}`);
    for (let num = min; num <= max; num++) {
        if (num % 9 === 0) {
            console.log(num);
        }
    }
}
numDivisibleBy9(['100', '200']);