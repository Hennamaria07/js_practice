const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");
const scoreEl = document.getElementById('score-el');
const resetBtn = document.getElementById("reset-btn");
const resultEl = document.getElementById("result-el");
const moveEl = document.getElementById("move-el");
const autoBtn = document.getElementById('auto-btn');

document.getElementById('confirm-el').style.display = 'none';

let autoPlay = false;
let intervalId;
rockBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playGame("rock");
});
paperBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playGame("paper");
});
scissorBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playGame("scissors");
});
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resetConfirm();
});

//RESET FUNCTION
const resetScore = () => {
  score.win = 0;
  score.loss = 0;
  score.tie = 0;
  localStorage.removeItem("score");
  scoreEl.innerHTML = `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`;
  moveEl.innerHTML= '';
  resultEl.innerHTML = '';
}

let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  loss: 0,
  tie: 0,
};

// if(score === null) {
// score = {
//   win: 0,
//   loss: 0,
//   tie: 0
// }
// }

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
  let result = "";
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
  if (result === "You win.") {
    score.win += 1;
  } else if (result === "You lose.") {
    score.loss += 1;
  } else if (result === "Tie.") {
    score.tie += 1;
  }

  //DISPLAY
  resultEl.innerHTML = result;
  localStorage.setItem("score", JSON.stringify(score));
  // paraEl.innerHTML = `<p>You picked ${playerMove}. Computer picked ${computerMove}. ${result}</p>`;
  scoreEl.innerHTML = `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`;
  moveEl.innerHTML = `You<img src="./images/${playerMove}-emoji.png" class="move-icon" alt="${playerMove}"> 
    <img src="./images/${computerMove}-emoji.png" class="move-icon" alt="${computerMove}">Computer`;
}

//AUTOPLAY FUNCTION
const autoPlayFun = () => {
  if (!autoPlay) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    autoPlay = true;
    autoBtn.innerHTML = "Stop Playing";
  } else {
    clearInterval(intervalId);
    autoPlay = false;
    autoBtn.innerHTML = "Auto Play";
  }
}
autoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  autoPlayFun();
});

//KEYDOWN
document.body.addEventListener('keydown', (e) => {
  if (e.key === "r") {
    playGame("rock");
  } else if (e.key === "p") {
    playGame("paper");
  } else if (e.key === "s") {
    playGame("scissors");
  } else if (e.key === "a") {
    autoPlayFun();
  } else if (e.key === "Backspace") {
    resetScore();
  }
});

//RESET CONFIRM FUNCTION
const resetConfirm = () => {
  document.getElementById("confirm-el").style.display = "block";
  document.getElementById('yes-btn').addEventListener('click', (e) => {
  document.getElementById("confirm-el").style.display = "none";
  resetScore();
  });
  document.getElementById('no-btn').addEventListener('click', (e) => {
  document.getElementById("confirm-el").style.display = "none";
  })
}