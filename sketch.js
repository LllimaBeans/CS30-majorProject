// Shrimp
// Laura Lima
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let whichScreen = "startScreen";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  circle(mouseX, mouseY, 100);
}

function changeScreen() {
  if (whichScreen === "startScreen"){
    // instruction page here
  }
  else if (whichScreen === "farm") {
    // farm here
  }
  else if (whichScreen === "shopSelling") {
    // customers here
  }
}

class CurrentScreen {
  constructor() {

  }

  display() {
    
  }
}

class Crustacean {
  constructor() {

  }

  display() {

  }
}