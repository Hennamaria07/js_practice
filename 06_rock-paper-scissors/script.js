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
       result = "You lose";
     } else if (computerMove === "paper") {
       result = "you won";
     } else if (computerMove === "scissors") {
       result = "Tie";
     }
  }
  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}