// variables
const btn = document.querySelectorAll('button');
const results = document.querySelector('.results')
const gameText = document.createElement('p');
const scoreText = document.createElement('p');
//scoreText.style.marginLeft = '4px'
let playerScore = 0;
let computerScore = 0;
let playerWin;

// event listener on each button
btn.forEach(button => button.addEventListener('click', () => {
    playRound(button.className, getComputerChoice());
}))

// function for random computer choice
function getComputerChoice() {
    let randomAssignment = Math.floor(Math.random() * 3);
    let computerChoice = "";

    if(randomAssignment === 0) {
        computerChoice = "rock";
    } else if (randomAssignment === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

// play round function
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toString().toLowerCase();
    // console.log(playerSelection, computerSelection);

    // Rock vs Paper, Rock vs Scissors, Rock vs Rock
    if((playerSelection == "rock") && (computerSelection == "paper")) {
        playerWin = false;
        gameText.textContent = "You lose! Their paper beats your rock";
    }
    else if((playerSelection == "rock") && (computerSelection == "scissors")) {
        playerWin = true;
        gameText.textContent = "You got em! Your rock broke their scissors!";
    }
    else if((playerSelection == "rock") && (computerSelection == "rock")) {
        playerWin = null;
        gameText.textContent = "Wow! You both picked rock!";
    }
    // Scissors vs Paper, Scissors vs Scissors, Scissors vs Rock
    else if((playerSelection == "scissors") && (computerSelection == "paper")) {
        playerWin = true;
        gameText.textContent = "You win! Your scissors cut their paper!";
    }
    else if((playerSelection == "scissors") && (computerSelection == "scissors")) {
        playerWin = null;
        gameText.textContent = "Wow! You both picked scissors!";
    }
    else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        playerWin = false;
        gameText.textContent = "You lose! Their rock cracked your scissors!";
    }
    // Paper vs Paper, Paper vs Scissors, Paper vs Rock
    else if((playerSelection == "paper") && (computerSelection == "paper")) {
        playerWin = null;
        gameText.textContent = "Wow! You both picked paper!";
    }
    else if((playerSelection == "paper") && (computerSelection == "scissors")) {
        playerWin = false;
        gameText.textContent = "You lose! Their scissors cut your paper!";
    }
    else if((playerSelection == "paper") && (computerSelection == "rock")) {
        playerWin = true
        gameText.textContent = "You win! Your paper wrapped around their rock";
    }
    results.appendChild(gameText);
    game(playerWin);
}

// keep track of the game
function game(winner) {
    const score = document.querySelector(".results");
    if(winner === true) {
        playerScore++;
    } else if(winner === false) {
        computerScore++;
    } else {

    }
    scoreText.textContent = "Player Score: " + playerScore + " vs Computer Score: " + computerScore;
    gameText.appendChild(scoreText);

    if(playerScore === 5) {
        scoreText.textContent = "WOOOOO YOU WIN";
        gameText.appendChild(scoreText);
    } else if(computerScore === 5) {
        scoreText.textContent = "Wow you lost against a bot what a loser";
        gameText.appendChild(scoreText);
    }
}