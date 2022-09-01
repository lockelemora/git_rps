const rpsArray = ['Rock', 'Paper', 'Scissor'];
let item = rpsArray[Math.floor(Math.random() * rpsArray.length)];
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        if (playRound(playerSelection, computerSelection) === 'Player wins') {
            return(playerScore += (playerScore + 1));
        } 
        else if (playRound(playerSelection, computerSelection) === 'Computer wins') {
            return(playRound(playerSelection, computerSelection));
        }
        else if (playRound(playerSelection, computerSelection) === 'Tie, nobody wins') {
            return(playRound(playerSelection, computerSelection));
    }
    }
}
console.log(game())

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