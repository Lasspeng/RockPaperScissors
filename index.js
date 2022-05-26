function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
console.log(computerPlay)

function RockPaperScissors(playerSelection, computerSelection=computerPlay()) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return("You win! Rock beats Scissors")
  } else if (playerSelection === "rock" && computerSelection == "paper") {
    return("You lose! Paper beats Rock")
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return("You neither win nor lose! Rock can't beat Rock")
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return("You win! Paper beats Rock")
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return("You neither win nor lose! Paper can't beat Paper")
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return("You lose! Scissors beats Paper")
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return("You lose! Rock beats Scissors")
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return("You win! Scissors beats Paper")
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    return("You neither win nor lose! Scissors can't beat Scissors")
  }
}