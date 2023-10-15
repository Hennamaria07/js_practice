console.log(
  document.getElementsByClassName("js-btn")[0].classList.contains("js-btn")
);
document.getElementsByClassName('game-btn')[0].addEventListener('click', (e) => {
    condition(document.getElementsByClassName("game-btn")[0]);
});
document.getElementsByClassName('gaming-btn')[0].addEventListener('click', (e) => {
    condition(document.getElementsByClassName("gaming-btn")[0]);
});
document.getElementsByClassName('music-btn')[0].addEventListener('click', (e) => {
    condition(document.getElementsByClassName("music-btn")[0]);
});
document.getElementsByClassName('tech-btn')[0].addEventListener('click', (e) => {
    condition(document.getElementsByClassName('tech-btn')[0]);
});

function condition(element) {
    if (!element.classList.contains("is-toggled")) {
        turnOffPreviousButton();
      element.classList.add("is-toggled");
    } else {
      element.classList.remove("is-toggled");
    }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector(".is-toggled");
  if (previousButton) {
    previousButton.classList.remove("is-toggled");
  }
}