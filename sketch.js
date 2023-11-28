// Shrimp
// Laura Lima
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let whichScreen = "start";

// Placements for the buttons that toggle which screen
let buttonX = 50;
let buttonY;
let buttonW = 50;
let buttonH = 30;
let buttonSpace = 100;

// Making the pools as global variables and assigning placements
let pool1, pool2, pool3, pool4;
let poolX = 150;
let poolY = 100;
let poolW = 250;
let poolH = 200;
let poolVerticalDist = 300;
let poolHorizontalDist = 400;

// Where the crustaceans should spawn in the pools
let birthX = (poolX + poolW) / 2;
let birthY = (poolY + poolH) / 2;
let birthW = 20;
let birthH = 20;

// Temp? variable for if the pools should work
let shouldGrow = false;

// Will be used with millis for wait time in growing crustaceans
let waitTime = 5000;
let startTime = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonY = height - 50;
}

function draw() {
  buttonCalls();

}

function buttonCalls() {
  fill("black");
  let button1 = rect(buttonX, buttonY, buttonW, buttonH);
  let button2 = rect(buttonX + buttonSpace, buttonY, buttonW, buttonH);
  let button3 = rect(buttonX + buttonSpace * 2, buttonY, buttonW, buttonH);
}

function mousePressed(){
  // Pressing shop
  if (mouseX > buttonX && mouseX < buttonX + buttonW && mouseY > buttonY && mouseY < buttonY + buttonH){
    shop();
  }
  // Pressing farm
  else if (mouseX > buttonX + buttonSpace && mouseX < buttonX + buttonSpace + buttonW && mouseY > buttonY && mouseY < buttonY + buttonH){
    farm();
  }
  // Pressing start
  else if (mouseX > buttonX + buttonSpace * 2 && mouseX < buttonX + buttonSpace * 2 + buttonW && mouseY > buttonY && mouseY < buttonY + buttonH){
    start();
  }

  // Making them grow when pool is clicked, eggs will be added later
  if (mouseX > poolX && mouseX < poolX + poolW && mouseY > poolY && mouseY < poolY + poolH && shouldGrow) {
    grow();
    shouldGrow = false;
  }
}

function shop() {
  // Shop
  background(220);

}

function farm() {
  // The pools to grow the lovely crustaceans in
  background(220);

  fill("blue");
  pool1 = rect(poolX, poolY, poolW, poolH);
  pool2 = rect(poolX + poolHorizontalDist, poolY, poolW, poolH);
  pool3 = rect(poolX, poolY + poolVerticalDist, poolW, poolH);
  pool4 = rect(poolX + poolHorizontalDist, poolY + poolVerticalDist, poolW, poolH);

  shouldGrow = true;
}

function start() {
  background(220);

  // Once there's enough game to have something to explain do it here
}

function grow() {
  // use millies to make a five second delay 
  startTime = millis();
  if (millis() < startTime + waitTime) {
    fill("red");
    rect(birthX, birthY, birthW, birthH);
  }

}

class Crustacean {
  constructor(x, y, ) {
    
  }
  
  display() {
    
  }
}