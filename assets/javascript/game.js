var dice1 = 0;
var dice2 = 0;
var betAmount = document.getElementById('amount');
//results
var money = 0;
var clickPlayBtn = 0;
//each time you roll dice, the count get recorded here
var rollsBeforeBroke = [];
var highestAmountWon = [];
var rollCountAtHighest = [];


//FUNCTIONS ===================================================

//update money on DOM
function updateMoney() {
    document.getElementById('yourMoney-text').innerHTML = money;
};

function win() {
    money += 4;
    console.log("you win $4, now you have $" + money)
}

function loss() {
    money--;
    console.log("you loss $1, now you have $" + money)
}

//roll dice
    //dice roll random number, then display it on DOM
    //if sum is 7 then you win, if not you lose
    //if money is 0, then print out results
function rollDice() {
    
    dice1 = Math.ceil(Math.random()*6);
    dice2 = Math.ceil(Math.random()*6);
    document.getElementById('dice1-text').innerHTML = dice1;
    document.getElementById('dice2-text').innerHTML = dice2;

    if (dice1 + dice2 == 7) {
        win();
        updateMoney();
    } else {
        loss();
        updateMoney();
    };

    if (money == 0 ) {
        console.log("--You're OUT OF money!--")
        document.getElementById('endMessage').innerHTML = "You ran out of money.";
        document.getElementById('startingBet-text').innerHTML = betAmount.value;
        document.getElementById('totalRolls-text').innerHTML = clickPlayBtn;
        document.getElementById('highestAmount-text').innerHTML = highestAmountWon;
        document.getElementById('rollCountAtHighest-text').innerHTML = rollCountAtHighest;
    }

}

//============================================================================
//GAME START HERE ============================================================

var playButton = document.getElementById('playBtn');
var betButton = document.getElementById('betBtn');

//Use betAmount for money, BET button uses that money to bet
betButton.addEventListener('click', function() {
    money = betAmount.value;
    updateMoney();

})

//When PLAY button is clicked, 
    //if money is greater than 0 then roll the dices and play
    //if money is less than zero then they need to place a bet

playButton.addEventListener('click', function() {
    if (money > 0) {
        clickPlayBtn++;
        rollDice();
        console.log("play: " + clickPlayBtn)
        // rollsBeforeBroke.push(clickPlayBtn);
    }
    else {
        alert("You need to place a bet.")
    }
})






