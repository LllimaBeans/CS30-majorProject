// Shrimp
// Laura Lima
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let whichScreen = "start";

let buttonX = 200;
let buttonY = 200;
let buttonW = 50;
let buttonH = 30;
let buttonSpace = 100;



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  start();
  shop();
  farm();
}

function mousePressed(){
  // Pressing shop
  if (mouseX > buttonX && mouseX < buttonX + buttonW && mouseY > buttonY && mouseY < buttonY + buttonH){
    background(random(255));
  }
  // Pressing farm
  if (mouseX > buttonX + buttonSpace && mouseX < buttonX + buttonSpace + buttonW && mouseY > buttonY && mouseY < buttonY + buttonH){
    background(random(255));
  }
  // Pressing start
  if (mouseX > buttonX + buttonSpace * 2 && mouseX < buttonX + buttonSpace * 2 + buttonW && mouseY > buttonY && mouseY < buttonY + buttonH){
    background(random(255));
  }
}

function shop() {
  let button1 = rect(buttonX, buttonY, buttonW, buttonH);
}

function farm() {
  let button2 = rect(buttonX + buttonSpace, buttonY, buttonW, buttonH);
}

function start() {
  let button3 = rect(buttonX + buttonSpace * 2, buttonY, buttonW, buttonH);
}

class Crustacean {
  constructor() {

  }

  display() {

  }
}