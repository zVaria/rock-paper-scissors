const btn = document.querySelectorAll('button')

function getComputerChoice() {
    let randomAssignment = Math.floor(Math.random() * 3);
    let computerChoice = "";

    if(randomAssignment === 0) {
        computerChoice = "rock"
    } else if (randomAssignment === 1) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toString().toLowerCase();
    console.log(playerSelection, computerSelection);

    // Rock vs Paper, Rock vs Scissors, Rock vs Rock
    if((playerSelection == "rock") && (computerSelection == "paper")) 
        return "You lose! Paper beats Rock"
    else if((playerSelection == "rock") && (computerSelection == "scissors"))
        return "You win! Rock beats Scissors"
    else if((playerSelection == "rock") && (computerSelection == "rock"))
        return "Tie game!"
    // Scissors vs Paper, Scissors vs Scissors, Scissors vs Rock
    else if((playerSelection == "scissors") && (computerSelection == "paper"))
        return "You win! Scissors beats Paper"
    else if((playerSelection == "scissors") && (computerSelection == "scissors")) 
        return "Tie game!"
    else if ((playerSelection == "scissors") && (computerSelection == "rock"))
        return "You lose! Rock beats Scissors"
    // Paper vs Paper, Paper vs Scissors, Paper vs Rock
    else if((playerSelection == "paper") && (computerSelection == "paper"))
        return "Tie game!"
    else if((playerSelection == "paper") && (computerSelection == "scissors"))
        return "You lose! Scissors beats Paper"
    else if((playerSelection == "paper") && (computerSelection == "rock"))
        return "You win! Paper beats Rock"
}

function game() {
    
}

btn.forEach(button => button.addEventListener('click', () => {
    playRound(button.className, getComputerChoice());
}))