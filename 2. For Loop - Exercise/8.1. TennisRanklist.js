function tennisRanklist(input) {

    let tournaments = Number(input[0]);
    let startPoints = Number(input[1]);

    let seasonsPoint = 0;
    let winCount = 0;

    for (let i = 2; i < tournaments + 2; i++) {
        let result = input[i];

        switch (result) {
            case 'W': seasonsPoint += 2000; winCount++; break;
            case 'F': seasonsPoint += 1200; break;
            case 'SF': seasonsPoint += 720; break;
        }
    }

    console.log(`Final points: ${startPoints + seasonsPoint}`);

    let avgPoints = seasonsPoint / tournaments;
    console.log(`Average points: ${Math.floor(avgPoints)}`);

    let winPercent = (winCount / tournaments) * 100;
    console.log(`${winPercent.toFixed(2)}%`);

}
tennisRanklist(['5', '1400', 'F', 'SF', 'W', 'W', 'SF']);