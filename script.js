let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const number = Math.random();
  if (number < 0.33) return "rock";
  else if (number < 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  const choice = window.prompt("rock, paper, or scissors?");
  if (choice === null) return;
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) return "draw";
  else if (humanChoice === "rock" && computerChoice === "scissors") return "you win";
  else if (humanChoice === "paper" && computerChoice === "rock") return "you win";
  else if (humanChoice === "scissors" && computerChoice === "paper") return "you win";
  else return "computer wins";
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(result);
  }

  console.log(`Final score — You: ${playerScore}, Computer: ${computerScore}`);
}

playGame();