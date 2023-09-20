
let outPut = document.getElementById("displayResult");
let submitBtn = document.getElementById("submitValue");
let replayBtn = document.getElementById('replayButton')
let numberOfattempts = document.getElementById("attempts")
let numOFCorrectGuesses = document.getElementById("correctGuess")
let incorrectGuesses = document.getElementById("incorectguesses")


let valueEntered = document.getElementById("valueInput").value;
let randNum = parseInt((Math.random() * 100) + 1)

let correctGuess = 0;
let incorectGuess = 0;
let numberOfTrials= [];
let numOfIncorrectGuesses = 0;



function play() {
  let valueEntered = document.getElementById("valueInput").value;
  console.log(randNum)
  if (!valueEntered) {
    outPut.innerHTML = `Enter a number`;
  
  }
  else if (valueEntered == randNum) {
    outPut.innerHTML = "Congratulations, you guessed it right";
    if(this.valueEnter == this.randum){

      outPut.style.color = "green";
      randNum = parseInt((Math.random() * 100) + 1)
    }
    numberOfTrials.push(valueEntered)
    correctGuess++;
  }
  else if (valueEntered > randNum && valueEntered < 100) {
    outPut.innerHTML = `Guess was too high! Right guess is: ${randNum}`;
    outPut.style.color = "red";
    numberOfTrials.push(valueEntered)
    numOfIncorrectGuesses++
    incorectGuess++
    
  }
  else if (valueEntered < randNum && valueEntered > 1) {
    outPut.innerHTML = `Guess was too low! Right guess is: ${randNum}`
    outPut.style.color = "red";
    numberOfTrials.push(valueEntered)
    numOfIncorrectGuesses++
    incorectGuess++
    
  }
  else if (isNaN(valueEntered)) {
    outPut.style.color = "red";
    outPut.innerHTML = `${valueEntered} is not a number`
  }
  else if (valueEntered < 1) {
    outPut.innerHTML = "Higher, it has to be between 1 and 100"
    numberOfTrials.push(valueEntered)
  }
  else if (valueEntered > 100) {
    outPut.innerHTML = " Lower, it has to be between 1 and 100"
    numberOfTrials.push(valueEntered)
  }
}

function valueReset() {
  outPut.innerHTML = " "
  document.getElementById("valueInput").value = " "
}


let timer = document.getElementById("timeValue")
let timeSecond = 45;

displayTime(timeSecond);

const timeCountDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond <= 0 || timeSecond < 1){
    clearInterval(timeCountDown);
    document.getElementById("valueInput").disabled=true;
    document.getElementById("submitValue").disabled=true;
   
    timeOut()
    
  }
},1000)

function displayTime(second){
  const min = Math.floor(second / 60);
  const sec = second % 60;
  timer.innerHTML = `${(min < 10 ? "0": "")}${min}:${(sec < 10 ? "0" : "")}${sec}`;

}
function timeOut() {
  timer.innerHTML = "TIME OUT"
  finalResult()
  performance()
}

replayBtn.addEventListener('click', () => {
  location.reload()
} )
function finalResult(){
  numOFCorrectGuesses.innerHTML = `Number of correct guesses: ${correctGuess}`;
  incorrectGuesses.innerHTML= `Number of incorrect guesses: ${incorectGuess}`;
  numberOfattempts.innerHTML = `Guesses: ${numberOfTrials}`;
}

let percentageGrade = document.getElementById("percentagePerfomed")

function performance() {

let result = (correctGuess / (correctGuess + numOfIncorrectGuesses)) * 100;
if (correctGuess && numOfIncorrectGuesses){

  percentageGrade.innerHTML = `Percentage performance: ${parseInt(result)}%`
}
else{
  percentageGrade.innerHTML = `Percentage performance: 0%`
}

}

 
