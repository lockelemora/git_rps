let playerScore = 0;
let computerScore = 0;
let roundNum = 1;

// Naming User and Computer scores to update (might need to change computer score to random score)
const userScore = document.querySelector('.userScore');
const randomScore = document.querySelector('.computerScore');

// Naming User's buttons to add event listeners
const playerRock = document.querySelector('.Rock');
const playerPaper = document.querySelector('.Paper');
const playerScissors = document.querySelector('.Scissors');

// Naming Computer's buttons to add event listeners
const computerRock = document.querySelector('.computerRock');
const computerPaper = document.querySelector('.computerPaper');
const computerScissors = document.querySelector('.computerScissors');

// Naming and placing the Results of each round
const userContainer = document.querySelector('.userContainer');
const gameWrapper = document.querySelector('.gameWrapper');

// Creating an Array for making a turn log
let resultsArray = []
let resultsLog = document.createElement('ul'); // what is this?
resultsLog.classList.add('round-result'); // what is this?
gameWrapper.insertAdjacentElement('beforeend', resultsLog); // what is this?

// Creating a button to refresh the page
const newGame = document.createElement('div');
newGame.textContent = 'Play again';
newGame.classList.add('button', 'refresh');

// Function to refresh page
function refreshPage() {
    window.location.reload(true);
}

// A new result will appear at the top of the log for each term
function gameLog() {
    let li = document.createElement('li');
    li.textContent = resultsArray[`${resultsArray.length - 1}`];
    resultsLog.insertAdjacentElement('afterbegin', li);
}

// Adding annnimation to the Computer's button
function computerColor(computerSelection) {
    if (computerSelection === "Rock") {
        removeColor();
        computerRock.classList.add('computerPick');
    }
    if (computerSelection === "Paper") {
        removeColor();
        computerPaper.classList.add('computerPick');
    }
    if (computerSelection === "Scissors") {
        removeColor();
        computerScissors.classList.add('computerPick');
    }
}

// Adding hover state to User's buttons
function userHover() {
    if (playerScore <= 4 && computerScore <= 4) {
        this.classList.add('userHover');
    }
}

// Remove hover from buttons
function removeHover() {
    this.classList.remove('userHover');
}

// Adding hover state to new game button (refresh page)
function refreshHover() {
    newGame.classList.add('userHover');
}


// Removing color from Computer's button
function removeColor() {
    computerRock.classList.remove('computerPick');
    computerPaper.classList.remove('computerPick');
    computerScissors.classList.remove('computerPick');
}

// Removing color from User's button
function removeUserColor() {
    playerRock.classList.remove('userClick');
    playerPaper.classList.remove('userClick');
    playerScissors.classList.remove('userClick');
}

// Removing annimation from User's button
function removeClick() {
    this.classList.remove('userClick');
    this.classList.remove('userHover');
}




// User's buttons event listener for hover state
playerRock.addEventListener('mouseover', userHover);
playerPaper.addEventListener('mouseover', userHover);
playerScissors.addEventListener('mouseover', userHover);

// User's buttons event listener to remove animation
playerRock.addEventListener('transitioned', removeClick);
playerPaper.addEventListener('transitioned', removeClick);
playerScissors.addEventListener('transitioned', removeClick);

// User's button event listener to remove hover state
playerRock.addEventListener('mouseleave', removeHover);
playerPaper.addEventListener('mouseleave', removeHover);
playerScissors.addEventListener('mouseleave', removeHover);

// User's button event listener to play the game
playerRock.addEventListener('click', playGame);
playerPaper.addEventListener('click', playGame);
playerScissors.addEventListener('click', playGame);

// End game button to refresh page (hover start & end, click)
newGame.addEventListener('mouseover', refreshHover);
newGame.addEventListener('mouseleave', removeHover);
newGame.addEventListener('click', refreshHover);

// Computer's buttons to remove animation
computerRock.addEventListener('transitionend', removeColor);
computerPaper.addEventListener('transitionend', removeColor);
computerScissors.addEventListener('transitionend', removeColor);

// Refresh page button at the end of the game
newGame.addEventListener('click', refreshPage);





// function to determine computer selection
function computerPlay() {
    const number = Math.floor(Math.random() * 1000);
    if (number % 3 === 0) {
        return "Rock";
    }
    if (number % 3 === 1) {
        return "Paper"
    }
    else {
        return "Scissors";
    }
}


// function that plays the game
function playGame(playerSelection, computerSelection) {
    playerSelection = this.dataset.button;
    console.log(playerSelection);
    computerSelection = computerPlay();
    removeUserColor(); // Removes any current animation
    //this.classlist.add('userClick'); // Adds any new button animation
    if (
            ((playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")) &&
                (playerScore <= 5 || computerScore <= 5)
    ) {
        playerScore++;
        resultsArray.push(`You won round #${roundNum}: ${playerSelection} beats ${computerSelection}. Score: ${playerScore} - ${computerScore}`);
        userScore.textContent = playerScore; // Updates player score
        if (playerScore >= 5) {
            resultsArray.push(`You won! You got 5 points! Round #${roundNum}: ${playerSelection} beats ${computerSelection}`);
            this.removeEventListener('click', playGame); // may need to do it at class level eg: playerRock
            resultsLog.insertAdjacentElement('beforebegin', newGame); // understand and code newGame        
    }
        roundNum++;
} else if (
            ((playerSelection === "Rock" && computerSelection === "Paper") ||
            (playerSelection === "Paper" && computerSelection === "Scissors") ||
            (playerSelection === "Scissors" && computerSelection === "Rock")) &&
                (playerScore <= 5 || computerScore <= 5)
    ) {
        computerScore++;
        resultsArray.push(`Computer won round #${roundNum}: ${computerSelection} beats ${playerSelection}. Score: ${playerScore} - ${computerScore}`);
        randomScore.textContent = `${computerScore}`; // Updates player score
        if (computerScore >= 5) {
            resultsArray.push(`You lost! The computer got 5 points! Round #${roundNum}: ${computerSelection} beats ${playerSelection}`);
            this.removeEventListener('click', playGame); // may need to do it at class level eg: playerRock
            resultsLog.insertAdjacentElement('beforebegin', newGame); // understand and code newGame            
    }
        roundNum++;
    } else {
        resultsArray.push(`Tie for round #${roundNum}: ${playerSelection} and ${computerSelection}. No points.`);
        roundNum++
    }
    computerColor(computerSelection); // Adds animation for Computer's button
    gameLog();
}
    

