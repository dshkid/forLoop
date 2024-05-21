function trekkingMania(input) {

    let climberCount = Number(input[0]);

    let mount1 = 0;
    let mount2 = 0;
    let mount3 = 0;
    let mount4 = 0;
    let mount5 = 0;

    for (let i = 1; i <= climberCount; i++) {
        let curNum = Number(input[i]);

        if (curNum <= 5) {
            mount1 += curNum;
        } else if (curNum <= 12) {
            mount2 += curNum;
        } else if (curNum <= 25) {
            mount3 += curNum;
        } else if (curNum <= 40) {
            mount4 += curNum;
        } else {
            mount5 += curNum;
        }
    }

    let allAlpinist = mount1 + mount2 + mount3 + mount4 + mount5;

    let percent1 = (mount1 / allAlpinist) * 100;
    let percent2 = (mount2 / allAlpinist) * 100;
    let percent3 = (mount3 / allAlpinist) * 100;
    let percent4 = (mount4 / allAlpinist) * 100;
    let percent5 = (mount5 / allAlpinist) * 100;

    console.log(`${percent1.toFixed(2)}%`);
    console.log(`${percent2.toFixed(2)}%`);
    console.log(`${percent3.toFixed(2)}%`);
    console.log(`${percent4.toFixed(2)}%`);
    console.log(`${percent5.toFixed(2)}%`);
}
trekkingMania(['10', '10', '5', '1', '100', '12', '26', '17', '37', '40', '78']);