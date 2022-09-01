const rpsArray = ['Rock', 'Paper', 'Scissor'];
let item = rpsArray[Math.floor(Math.random() * rpsArray.length)];
const playerSelection = "Rock";
const computerSelection = item;
let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
     return item
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("Tie, nobody wins");
    } else if ( 
        (playerSelection === 'Rock' && computerSelection === 'Scissor') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissor' && computerSelection === 'Paper')) {
        return ("Player wins");
    } else if (
    (playerSelection === 'Scissor' && computerSelection === 'Rock') ||
    (playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissor')) {
    return ("Computer wins");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        if (playRound(playerSelection, computerSelection) === 'Player wins') {
            console.log(playRound(playerSelection, computerSelection));
        } 
        else if (playRound(playerSelection, computerSelection) === 'Computer wins') {
            console.log(playRound(playerSelection, computerSelection));
        }
        else if (playRound(playerSelection, computerSelection) === 'Tie, nobody wins') {
            console.log(playRound(playerSelection, computerSelection));
    }
    }
}

console.log(game())