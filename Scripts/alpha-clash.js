// console.log("connected");

// function play() {
//   const getHomeScreen = document.getElementById("homeScreen");
//   //Hide Home Screen
//   getHomeScreen.classList.add("hidden");
//   const getPlayGround = document.getElementById("play-ground");
//   //Show Play Ground Screen
//   getPlayGround.classList.remove("hidden");
// }

let expectedText = "";

function handleKeyBoardButtonPress(event) {
  const playerPress = event.key;
  //   console.log("button press", playerPress);

  if (playerPress === "Escape") {
    gameOver();
  }

  // get the expected to press
  const currentAlphabetElement = document.getElementById("show-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  expectedText = expectedAlphabet;
  //   console.log(playerPress, expectedAlphabet);

  //checked match or not
  if (playerPress === expectedAlphabet) {
    //update score
    // 1. get the current score

    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);

    // 2. increase the score by 1
    // 3. show the updated score
    const newScore = getTextElementValueById("current-score");
    const updateScore = newScore + 1;
    setTextElementValueById("current-score", updateScore);
    const totalScore = getTextElementValueById("total-score");
    setTextElementValueById("total-score", updateScore);

    //start new round
    removeBgColor(expectedAlphabet);
    continueGame();
  } else {
    const newLife = getTextElementValueById("current-life");
    const updateLife = newLife - 1;
    setTextElementValueById("current-life", updateLife);
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // currentLifeElement.innerText = currentLife - 1;
    if (newLife > 0) {
      removeBgColor(expectedAlphabet);
      continueGame();
    } else {
      gameOver();
    }
  }
}

// capture keyboard key press
document.addEventListener("keyup", handleKeyBoardButtonPress);

// document.getElementById("play-again").addEventListener("click", function () {
//   hideElementById("score-card");
//   showElementById("play-ground");
//   continueGame();
// });

function continueGame() {
  //step -1 : Generate a random alphabet
  const alphabet = getARandomAlphabet();
  //   console.log("Your rand: ", alphabet);

  // set randomly generated alphabet to the display
  const currentAlphabetElement = document.getElementById("show-alphabet");
  currentAlphabetElement.innerText = alphabet;

  // set Background Color
  setBgColor(alphabet);
}

function enterGame() {
  hideElementById("homeScreen");
  hideElementById("score-card");
  showElementById("play-ground");

  // Reset score and life
  const currentText = getElementTextColorById("show-alphabet");
  removeBgColor(currentText);
  setTextElementValueById("current-life", 3);
  setTextElementValueById("current-score", 0);
  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("score-card");
}
