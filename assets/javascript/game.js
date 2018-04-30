var totalLoss = 0;
var totalGuess = 9;
var totalWin = 0;
var userInput = document.getElementById("user");
var userGuess = [""];
var displayWin;
var displayLoss;
var displayChance;
var displayGuess;
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//load all these element IDs first
document.addEventListener("DOMContentLoaded", function () {
    displayWin = document.getElementById("Win");
    displayLoss = document.getElementById("Loss");
    displayChance = document.getElementById("Chances");
    displayGuess = document.getElementById("Guesses");
});

document.onkeyup = function (event) {
    console.dir(event);
    //change user input into upper case 
    userInput = event.key.toUpperCase();
    
    var compInput = letters[Math.floor(Math.random() * letters.length)];

    if (userInput == compInput){           
        if (totalWin < 10 && totalWin >= 0){
            totalWin = totalWin + 1;
            displayWin.textContent = totalWin;
            console.log("You have the same number");
        }
    }
    if (userInput !== compInput) {
        if (totalGuess > 0){
            totalGuess = totalGuess - 1;
            displayChance.textContent = totalGuess;
            //show past guesses onto the screen and push them in an array
            userGuess.push(userInput);
            displayGuess.textContent = userGuess;
        }
        if (totalGuess == 0){
            totalLoss = totalLoss + 1;
            displayLoss.textContent = totalLoss;
            //restart guesses back to 9 and clear all past guesses
            totalGuess = 9;
            userGuess = [];
        }
    }
};
