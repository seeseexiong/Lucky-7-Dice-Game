// var dice1 = [1, 2, 3, 4, 5, 6];
// var dice2 = [1, 2, 3, 4, 5, 6];
var options = ["1", "2", "4", "5", "6"];
var dice1 = 0;
var dice2 = 0;

var money = "";
numbOfRolls = 0;

function win() {
    money += 4;
}

function loss() {
    money--;
}

function randomeNumb() {
    dice1 = options[Math.floor(Math.random()*options.length)];
    dice2 = options[Math.floor(Math.random()*options.length)];

    //display numbers on DOM
    document.getElementById('dice1-text').innerHTML = dice1;
    document.getElementById('dice2-text').innerHTML = dice2;

}

document.onkeyup = function(event) {
    var keyPressed = event.key.toLowerCase();
    randomeNumb();
}