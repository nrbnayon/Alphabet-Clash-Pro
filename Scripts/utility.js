function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBgColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400", "text-white");
}

function getARandomAlphabet() {
  // get or create an alphabet array
  const kbdElements = document.querySelectorAll(".kbd");
  let alphabetArray = [];
  for (const kbdElement of kbdElements) {
    const alphabetInnerText = kbdElement.innerText;
    alphabetArray.push(alphabetInnerText);
  }
  //   console.log(alphabetArray);

  // get a random index between 0 - 25
  const randomNumber = Math.round(Math.random() * 25);
  const alphabet = alphabetArray[randomNumber];
  //   console.log(randomNumber, alphabet);
  return alphabet;
}

// another way create a random alphabet

// function getARandomAlphabet() {
//   // get or create an alphabet array
//   const alphabetString = "abcdefghijklmnoprstuvwxyz";
//   const alphabets = alphabetString.split("");
//   //   console.log(alphabetArray);

//   // get a random index between 0 - 25
//   const randomNumber = Math.round(Math.random() * 25);

//   const alphabet = alphabets[randomNumber];
//   //   console.log(randomNumber, alphabet);
//   return alphabet;
// }
