var dice1 = 0;
var dice2 = 0;
//reference input amount and buttons from DOM
var betAmount = document.getElementById('amount');
var playButton = document.getElementById('playBtn');
var betButton = document.getElementById('betBtn');
//results
    //store current money that will display on DOM
var money = 0;
    //each time you roll dice, the amount get recorded here
var wonAmounts = [];
    //store the largest wonAmount element inside of highestAmountWon
var highestAmountWon = 0;
    //store the roll-count of the highest amount
var rollCountAtHighest = 0;


//FUNCTIONS that are used multiple times =====================================

function updateMoney() {
    document.getElementById('yourMoney-text').innerHTML = money;
};

function printResults() {
    document.getElementById('endMessage').innerHTML = "You ran out of money. Scroll down to see your results!";
    document.getElementById('startingBet-text').innerHTML = betAmount.value;
    document.getElementById('totalRolls-text').innerHTML = wonAmounts.length;
    console.log("length: "+ wonAmounts.length)
    document.getElementById('highestAmount-text').innerHTML = highestAmountWon;
    document.getElementById('rollCountAtHighest-text').innerHTML = rollCountAtHighest;
};

function resetResults() {
    wonAmounts = [];
    highestAmountWon = 0;
    rollCountAtHighest = [];
    printResults();
};

//roll dice
    //dice select random number, then display it on DOM
    //if sum of dice 1 and dice 2 equals 7 then you win, or else you lose
    //if money is 0, then print out results
function rollDice() {
    dice1 = Math.ceil(Math.random()*6);
    dice2 = Math.ceil(Math.random()*6);
    document.getElementById('dice1-text').innerHTML = dice1;
    document.getElementById('dice2-text').innerHTML = dice2;

    if (dice1 + dice2 == 7) {
        //YOU WIN $4
        money+=4;
        console.log("you win $4, now you have $" + money)
        updateMoney();
    } else {
        //YOU LOSE $1
        money--;
        console.log("you loss $1, now you have $" + money)
        updateMoney();
    };

    if (money == 0 ) {
        console.log("--You're OUT OF money!--")
        //highest amount won is the max value of the wonAmounts array
        highestAmountWon = Math.max.apply( null, wonAmounts );
        console.log("highest amount: "+ highestAmountWon)

        //the roll-count of the highest number is the index + 1 of the highestAmountWon
        rollCountAtHighest = wonAmounts.indexOf(highestAmountWon) + 1;
        console.log("highest amount won at round: "+ rollCountAtHighest )
        printResults();
    }
};

//GAME START HERE ============================================================

//When BET button is click - run the function
    //use the vaule from input field as money
    //update on DOM and reset the results
betButton.addEventListener('click', function() {
    money = betAmount.value;
    updateMoney();
    resetResults();
});

//When PLAY button is clicked - run the function
    //if money is greater than 0    
        //keep track of the round being play in an array called wonAmounts
        //then roll the dices and play
    //of else if money is less than zero then they need to place a bet

playButton.addEventListener('click', function() {
    if (money > 0) {        
        wonAmounts.push(money);
        console.log("Recently Have Money: " + wonAmounts);
        rollDice();
        console.log("===============================")
    }
    else {
        alert("You need to place a bet.")
    };
});
