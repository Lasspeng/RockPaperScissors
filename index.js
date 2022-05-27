function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}



function playRound(playerSelection, computerSelection=computerPlay()) {
  playerSelection = prompt("Choose between Rock, Paper, or Scissors").toLowerCase()
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

let userScore = 0
let computerScore = 0

for (let i = 0; i < 5; i++) {
  let roundResult = playRound()
  if (roundResult.includes("You win")) {
    userScore += 1
  } else if (roundResult.includes("You lose")) {
    computerScore += 1
}
  if (i < 4) {
  console.log(roundResult)
  } else if (i = 4) {
    if (userScore > computerScore) {
      console.log(`You won the game! You have ${userScore} wins and the computer has ${computerScore} wins`)
    } else if (userScore < computerScore) {
      console.log(`You lost the game! You have ${userScore} wins and the computer has ${computerScore} wins`)
    } else {
      console.log(`The game ends in a tie! You have ${userScore} wins and the computer has ${computerScore} wins`)
    }
  }
}

