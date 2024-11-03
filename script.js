function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
      choice = prompt("Invalid choice! Enter rock, paper, or scissors").toLowerCase();
    }
    return choice;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    }
  
    if (humanScore > computerScore) {
      console.log(`You win the game! ${humanScore} to ${computerScore}`);
    } else if (humanScore < computerScore) {
      console.log(`You lose the game! ${humanScore} to ${computerScore}`);
    } else {
      console.log(`It's a tie! ${humanScore} to ${computerScore}`);
    }
}

playGame();