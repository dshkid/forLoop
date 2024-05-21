function multiplicationTable(input) {
    let num = Number(input[0]);
    let sum = 0;
    for (let multiNum = 1; multiNum <= 10; multiNum++) {
        sum = multiNum * num;
        console.log(`${multiNum} * ${num} = ${sum}`);
    }
}
multiplicationTable(['5']);