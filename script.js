const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const resultsDisplay = document.getElementById("results-display");
const scoreDisplay = document.getElementById("score-display");



function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  let result;
    if (playerSelection === computerSelection) {
      result = ("It's a tie!");
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      playerScore++;
      result = (`You win! ${playerSelection} beats ${computerSelection}`);
    } else {
      computerScore++;
      result = (`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    resultsDisplay.textContent = `Round Result: ${result}`;
    scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    
    if (playerScore === 5) {
      resultsDisplay.innerHTML = "Player Wins the Game!<br>Game is Restarting...";
      setTimeout(resetGame, 3000);
  } else if (computerScore === 5) {
      resultsDisplay.innerHTML = "Computer Wins the Game!<br>Game is Restarting...";
      setTimeout(resetGame, 3000);
  }
}


function resetGame() {
  playerScore = 0;
  computerScore = 0;
  resultsDisplay.textContent = "";
  scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}


rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));