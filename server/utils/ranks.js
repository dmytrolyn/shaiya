const assignRank = (kills) => {
    let rank = 0;
    
    if (kills > 0 && kills < 50)
        rank = 1;
    else if (kills >= 50 && kills < 300)
        rank = 2;
    else if (kills >= 300 && kills < 1000)
        rank = 3;
    else if (kills >= 1000 && kills < 5000)
        rank = 4;
    else if (kills >= 5000 && kills < 10000)
        rank = 5;
    else if (kills >= 10000 && kills < 20000)
        rank = 6;
    else if (kills >= 20000 && kills < 30000)
        rank = 7;
    else if (kills >= 30000 && kills < 40000)
        rank = 8;
    else if (kills >= 40000 && kills < 50000)
        rank = 9;
    else if (kills >= 50000 && kills < 70000)
        rank = 10;
    else if (kills >= 70000 && kills < 90000)
        rank = 11;
    else if (kills >= 90000 && kills < 110000)
        rank = 12;
    else if (kills >= 110000 && kills < 130000)
        rank = 13;
    else if (kills >= 130000 && kills < 150000)
        rank = 14;
    else if (kills >= 150000 && kills < 200000)
        rank = 15;
    else if (kills >= 200000 && kills < 250000)
        rank = 16;
    else if (kills >= 250000 && kills < 300000)
        rank = 17;
    else if (kills >= 300000 && kills < 350000)
        rank = 18;
    else if (kills >= 350000 && kills < 400000)
        rank = 19;
    else if (kills >= 400000 && kills < 450000)
        rank = 20;
    else if (kills >= 450000 && kills < 500000)
        rank = 21;
    else if (kills >= 500000 && kills < 550000)
        rank = 22;
    else if (kills >= 550000 && kills < 600000)
        rank = 23;
    else if (kills >= 600000 && kills < 650000)
        rank = 24;
    else if (kills >= 650000 && kills < 700000)
        rank = 25;
    else if (kills >= 700000 && kills < 750000)
        rank = 26;
    else if (kills >= 750000 && kills < 800000)
        rank = 27;
    else if (kills >= 800000 && kills < 850000)
        rank = 28;
    else if (kills >= 850000 && kills < 900000)
        rank = 29;
    else if (kills >= 900000 && kills < 1000000)
        rank = 30;
    else if (kills === 1000000)
        rank = 31;

    return rank;
}

module.exports = assignRank;