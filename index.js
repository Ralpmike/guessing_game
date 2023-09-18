
let outPut = document.getElementById("displayResult");
let submitBtn = document.getElementById("submitValue");
let replayBtn = document.getElementById('replayButton')
let numberOfattempts = document.getElementById("atempts")
let numOFCorrectGuesses = document.getElementById("correct-guess")


function play() {
  let valueEntered = document.getElementById("valueInput").value;
  let randNum = parseInt((Math.random() * 100) + 1)
  if (valueEntered == randNum) {
    outPut.innerHTML = "Congratulations, you guessed it right";
    outPut.style.color = "green";
    valueReset()
  }
  else if (valueEntered > randNum && valueEntered < 100) {
    outPut.innerHTML = `Guess was too high! Right guess is: ${randNum}`;

  }
  else if (valueEntered < randNum && valueEntered > 1) {
    outPut.innerHTML = `Guess was too low! Right guess is: ${randNum}`
  
  }
  else if (isNaN(valueEntered)) {
    outPut.innerHTML = `${valueEntered} is not a number`
  }
  else if (!valueEntered) {
    outPut.innerHTML = `Enter a number`

  }
  else if (valueEntered < 1) {
    outPut.innerHTML = "Higher, it has to be between 1 and 100"
  }
  else if (valueEntered > 100) {
    outPut.innerHTML = " Lower, it has to be between 1 and 100"
  }
}

function valueReset() {
  outPut.innerHTML = " "
  document.getElementById("valueInput").value = " "
}


let timer = document.getElementById("timeValue")
let timeSecond = 15;

displayTime(timeSecond);

const timeCountDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond <= 0 || timeSecond < 1){
    clearInterval(timeCountDown);
    document.getElementById("valueInput").disabled=true;
    document.getElementById("submitValue").disabled=true;
    timeOut()
    valueReset()
  }
},1000)

function displayTime(second){
  const min = Math.floor(second / 60);
  const sec = second % 60;
  timer.innerHTML = `${(min < 10 ? "0": "")}${min}:${(sec < 10 ? "0" : "")}${sec}`;

}
function timeOut() {
  // document.write("OOPS! TIME OUT")
  // Document.write("Reload the page to continue")

  timer.innerHTML = "TIME OUT"
  displayResult()
}

replayBtn.addEventListener('click', () => {
  location.reload()
} )


let correctGuess = 0;
let numberOfTrials= [];
function displayResult(){

  if (valueEntered == randNum){
    correctGuess++
    numOFCorrectGuesses.innerHTML = `NUmber of correct guesses: ${correctGuess}`;
  }
  else {
    numberOfTrials.push(valueEntered)
    numberOfattempts.innerHTML = `Numbers entered: ${numberOfTrials}`;
  }
}
