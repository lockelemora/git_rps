const rpsArray = ['Rock', 'Paper', 'Scissors'];
let item = rpsArray[Math.floor(Math.random() * rpsArray.length)];
let answer = prompt("Rock, Paper, Scissors ?");
let playerSelection = answer;
let computerSelection = item;
let playerScore = 0;
let computerScore = 0;

function errorMessage(answer) {
    if (answer != ("Rock" || "Paper" || "Scissors")) {
        answer = prompt("Rock, Paper, Scissors ?, Write carefully!")
    }
    else {
        answer = answer
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("Tie, nobody wins");
    } else if ( 
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        return ("Player wins");
    } else if (
    (playerSelection === 'Scissors' && computerSelection === 'Rock') ||
    (playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissors')) {
    return ("Computer wins");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        if (playRound(playerSelection, computerSelection) === 'Player wins') {
            playerScore += 1
            console.log("Player: " + playerScore + " | Computer: " + computerScore);
        } 
        else if (playRound(playerSelection, computerSelection) === 'Computer wins') {
            computerScore += 1
            console.log("Player: " + playerScore + " | Computer: " + computerScore);
        }
        else if (playRound(playerSelection, computerSelection) === 'Tie, nobody wins') {
            
    }
        item = rpsArray[Math.floor(Math.random() * rpsArray.length)];
        computerSelection = item;
    }
    if (playerScore > computerScore) {
        console.log("Player Wins");
    }
    else if (playerScore < computerScore) {
        console.log("Computer Wins");
    }
    else {
        console.log("Tie game!")
    }
}

console.log(game())