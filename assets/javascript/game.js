var dice1 = 0;
var dice2 = 0;
var betAmount = document.getElementById('amount');
var money = 0;

//FUNCTIONS ===================================================

//update money on DOM
function updateMoney() {
    document.getElementById('yourMoney-text').innerHTML = money;
};

function win() {
    money += 4;
    console.log("you win " + money)
}

function loss() {
    money--;
    console.log("you loss " + money)
}

//roll dice
function rollDice() {
    
    dice1 = Math.ceil(Math.random()*6);
    dice2 = Math.ceil(Math.random()*6);

    //display numbers on DOM
    document.getElementById('dice1-text').innerHTML = dice1;
    document.getElementById('dice2-text').innerHTML = dice2;

    if (dice1 + dice2 == 7) {
        win();
        updateMoney();
    }
    else {
        loss();
        updateMoney();
    }
}

//GAME START HERE ============================================================

var playButton = document.getElementById('playBtn');
var betButton = document.getElementById('betBtn');

//Use betAmount for money, BET button uses that money to bet
betButton.addEventListener('click', function() {
    money = betAmount.value;
    updateMoney();
})

//When PLAY button is clicked, if money is less than zero then they need to place a bet
    //if money is greater than 0 then roll the dice and play
playButton.addEventListener('click', function() {

    if ( money <= 0 ) {
        alert("You need to place a bet.")
    }
    else {
        rollDice();
    }
})






