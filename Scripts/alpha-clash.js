// console.log("connected");

// function play() {
//   const getHomeScreen = document.getElementById("homeScreen");
//   //Hide Home Screen
//   getHomeScreen.classList.add("hidden");
//   const getPlayGround = document.getElementById("play-ground");
//   //Show Play Ground Screen
//   getPlayGround.classList.remove("hidden");
// }

function continueGame() {
  //step -1 : Generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log("Your rand: ", alphabet);

  // set randomly generated alphabet to the display
  const currentAlphabetElement = document.getElementById("show-alphabet");
  currentAlphabetElement.innerText = alphabet;

  // set Background Color

  setBgColor(alphabet);
}

function enterGame() {
  hideElementById("homeScreen");
  showElementById("play-ground");
  continueGame();
}
