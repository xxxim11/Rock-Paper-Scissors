const options = ["rock", "paper", "scissors"];
const resultDisplay = document.getElementById("resultDisplay");
const scoreDisplay = document.getElementById("scoreDisplay");

let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    
    if (result === "Tie") {
        resultDisplay.textContent = "It's a Tie!";
    } else if (result === "Player") {
        resultDisplay.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        scorePlayer++;
    } else {
        resultDisplay.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        scoreComputer++;
    }

    // Update the score display
    scoreDisplay.textContent = `Player: ${scorePlayer} - Computer: ${scoreComputer}`;

    // Check if the game has ended (either player reaches 5 points)
    if (scorePlayer === 5) {
        resultDisplay.textContent = "Congratulations! You won the game!";
        disableButtons();
    } else if (scoreComputer === 5) {
        resultDisplay.textContent = "Game over! The computer won the game!";
        disableButtons();
    }
}

// Disable the buttons when the game is over
function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", () => {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

document.getElementById("paper").addEventListener("click", () => {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

document.getElementById("scissors").addEventListener("click", () => {
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});
