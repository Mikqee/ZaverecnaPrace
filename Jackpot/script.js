
let score = 0;
let clickValue = 1;
let upgrades = [0, 0, 0];
let lotteryCost = 1;
let rebirthCost = 5000;

function updateScore() {
    document.getElementById("scoreValue").innerText = score;
}

function clickButton() {
    score += clickValue;
    updateScore();
}

function buyUpgrade(upgradeIndex) {
    const upgradeCosts = [15, 200, 750];
    const upgradeValues = [1, 5, 15];

    if (score >= upgradeCosts[upgradeIndex - 1]) {
        score -= upgradeCosts[upgradeIndex - 1];
        clickValue += upgradeValues[upgradeIndex - 1];
        upgrades[upgradeIndex - 1]++;
        updateScore();
    } else {
        alert("Nemáte dostatek peněz pro zakoupení!");
    }
}


function buyLotteryTicket() {
    if (score >= lotteryCost) {
        score -= lotteryCost;
        let lotteryResult = 'Výdledek loterie: ';

        for (let index = 0; index < 1; index++) {
            const lotteryWin = Math.floor(Math.random() * 10000) + 1; // Náhodné číslo od 1 do 10
            lotteryResult += `${lotteryWin} `;
            score += lotteryWin;
        }

        alert(lotteryResult);
        updateScore();
    } else {
        alert("Nemáš dostatek peněz pro koupení lístku do loterie!");
    }
}

function buyRebirth() {
    if (score >= rebirthCost) {
        score -= rebirthCost;
        clickValue = 250000000000000000000000000000000000000000000000;
        score = 0;

        updateScore();
    } else {
        alert("Nemáte dostatek peněz pro koupi vzkříšení!");
    }
}

document.getElementById("clickButton").addEventListener("click", clickButton);
