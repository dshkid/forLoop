function oscars(input) {
    let actorName = input[0];
    let academyPoint = Number(input[1]);
    let judgeCount = Number(input[2]);

    for (let i = 3; i < input.length; i += 2) {
        let juryName = input[i];
        let juryPoints = Number(input[i + 1]);

        let nameLengthPoint = juryName.length * juryPoints / 2;
        academyPoint += nameLengthPoint;

        if (academyPoint > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoint.toFixed(1)}!`);
            break;
        }
    }
    if (academyPoint <= 1250.5) {
        let pointNeeded = 1250.5 - academyPoint;
        console.log(`Sorry, ${actorName} you need ${pointNeeded.toFixed(1)} more!`);
    }

}
oscars(['Sandra Bullock', '340', '5', 'Robert De Niro', '50', 'Julia Roberts', '40.5', 'Daniel Day-Lewis', '39.4', 'Nicolas Cage', '29.9', 'Stoyanka Mutafova', '33']);