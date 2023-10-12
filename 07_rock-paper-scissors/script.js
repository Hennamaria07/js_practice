function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerMove = "rock";
  } else if (randomNumber === 1) {
    computerMove = "paper";
  } else if (randomNumber === 2) {
    computerMove = "scissors";
  }
  return computerMove;
}

const score = {
  win: 0,
  loss: 0,
  tie: 0
}

function playGame(playerMove) {
  let computerMove = pickComputerMove();
  let result = '';
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "scissors") {
     if (computerMove === "rock") {
       result = "You lose.";
     } else if (computerMove === "paper") {
       result = "You win.";
     } else if (computerMove === "scissors") {
       result = "Tie.";
     }
  }
  if(result === 'You win.') {
    score.win += 1;
  } else if(result === 'You lose.') {
    score.loss += 1;
  } else if(result === 'Tie.') {
    score.tie += 1;
  }
  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\nWins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`);
}
document.getElementById('reset-btn').addEventListener('click', (e) => {
e.preventDefault();
score.win = 0;
score.loss = 0;
score.tie = 0;
})