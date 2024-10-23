let sound;
let soundPlayed = false;
let startTime;

let audioStarted = false;

var angle = 0.0;
var offset = 60;
var scalar = 2;
var speed = 0.05;

let mouseWasPressed = false;

let x, y;

function preload() {
  getAudioContext().suspend();

  sound = loadSound("AreWeFriends.mp3");

}

function setup() {
  //  frameRate(30); // Thirty frames each second
  createCanvas(400, 400);
  startTime = millis()

  fill(238, 164, 187);
  background(238, 164, 187)

}

function draw() {
  if (audioStarted) {
    if (!soundPlayed) {
      sound.play();
      soundPlayed = true;
    }

    
    if (millis() - startTime > 1000 && millis() - startTime < 2500) {
      speed = 0.09;
    }


    if (millis() - startTime > 2500 && millis() - startTime < 8000) {
      speed = 1;
    }

    if (millis() - startTime > 8000 && millis() - startTime < 13000) {
      speed = 1;
    }


    angle += speed;
    scalar += speed;
    x = offset + cos(angle) * scalar;
    y = offset + sin(angle) * scalar;
    ellipse(x, y, 2, 2);
  }
}

function mousePressed() {
  // Start audio on user gesture
  if (!audioStarted) {
    userStartAudio();
    audioStarted = true;
  }
}