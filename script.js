// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var defaultPattern = [2, 5, 4, 3, 6, 1, 2, 4];
var pattern = defaultPattern;
var patternLength = 8;
var numberOfSquares = 6;
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.75;  //must be between 0.0 and 1.0
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
var guessCounter = 0;
var strikes = 3;
var mistakes = 0;

//Page Initialization
// Init Sound Synthesizer
g.connect(context.destination);
g.gain.setValueAtTime(0,context.currentTime);
o.connect(g);
o.start(0);

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  mistakes = 0;
  
  // Override the defaultPattern with random pattern for each game
  pattern = generateRandomPattern(patternLength);
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden")
  document.getElementById("stopBtn").classList.remove("hidden")
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden")
  document.getElementById("stopBtn").classList.add("hidden")
}

//// Sound Synthesis Functions ////

// Frequency mapping for buttons to tones
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 432.1,
  6: 532.4
}

// Plays a btn tone for an amount of time len
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
  tonePlaying = true
  setTimeout(function(){
    stopTone();
  },len)
}

// Starts playing a tone for a btn
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
    tonePlaying = true;
  }
}

// Stops playing a tone for a btn
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025);
  tonePlaying = false;
}

////////

//// Styling functions ////

// adds "lit" css class name to element with id button{btn}
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}

// removes "lit" css class name to element with id button{btn}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

////////

// From https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Generates random pattern of specified length
function generateRandomPattern(len) {
  var randomPattern = [];
  for (var i = 0; i < len; i++) {
  
    randomPattern.push(getRandomInt(numberOfSquares) + 1);
  }
  
  return randomPattern;
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]);// set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost!!!!");
}

function alertMistake(){
  alert("You made a mistake you have " + (strikes - mistakes) + " left!");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!!!!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }

  // game logic
  if (pattern[guessCounter] === btn){
    // user guessed correctly (pattern index === button)
    if (guessCounter === progress){
      // user has not finished pattern
      if (progress === pattern.length - 1){
        winGame();
      }
      else {
        progress = progress += 1;
        playClueSequence();
      }
    } else{
      // user guessed the entire pattern correctly
      // increment guessCounter to increase sequence size
      guessCounter = guessCounter += 1;
    }
  } else{
    //user guessed incorrectly
    mistakes = mistakes += 1;
    if (strikes === mistakes) {
      loseGame();
    } else {
      // show user they have a strike
      alertMistake();
    }
  }
}