function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let userScore = 0
let computerScore = 0

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  if (playerSelection === "rock" && computerSelection === "scissors") {
    userScore += 1
    results = "You win! Rock beats Scissors."
    scores = `User Score: ${userScore}     Computer Score: ${computerScore}`
    if (userScore === 5) {
      results = "You won the game. Reload the page to play again."
    }
  } else if (playerSelection === "rock" && computerSelection == "paper") {
    computerScore += 1
    results = "You lose! Paper beats Rock"
    scores = `User Score: ${userScore}     Computer Score: ${computerScore}`
    if (computerScore === 5) {
      results = "You lost the game. Reload the page to play again"
    }
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    results = "You neither win nor lose! Rock can't beat Rock"
    scores = `User Score: ${userScore}     Computer Score: ${computerScore}`
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    userScore += 1
    results = "You win! Paper beats Rock"
    scores = `User Score: ${userScore}     Computer Score: ${computerScore}`
    if (userScore === 5) {
      results = "You won the game. Reload the page to play again."
    }
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    results = "You neither win nor lose! Paper can't beat Paper"
    scores = `User Score: ${userScore}     Computer Score: ${computerScore}`
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1
    results = "You lose! Scissors beats Paper"
    scores = `User Score: ${userScore}     Computer Score: ${computerScore}`
    if (userScore === 5) {
      results = "You lost the game. Reload the page to play again."
    }
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1
    results = "You lose! Rock beats Scissors"
    scores = `User Score: ${userScore}     Computer Score: ${computerScore}`
    if (userScore === 5) {
      results = "You lost the game. Reload the page to play again."
    }
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    userScore += 1
    results = "You win! Scissors beats Paper"
    scores = `User Score: ${userScore}     Computer Score: ${computerScore}`
    if (userScore === 5) {
      results = "You won the game. Reload the page to play again."
    }
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    results = "You neither win nor lose! Scissors can't beat Scissors"
    scores = `User Score: ${userScore}     Computer Score: ${computerScore}`
  }
  document.getElementById("results").innerHTML = results
  document.getElementById("scores").innerHTML = scores
}


const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", function() {
  playRound("rock")
});

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", function() {
  playRound("paper")
});

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", function() {
  playRound("scissors")
});



