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
let shouldGrow1 = false;
let shouldGrow2 = false;
let shouldGrow3 = false;
let shouldGrow4 = false;

// Will be used with millis for wait time in growing crustaceans
let waitTime = 5000;
let startTime1, startTime2, startTime3, startTime4;
let oneClicked, twoClicked, threeClicked, fourClicked;

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonY = height - 50;
}

function draw() {
  buttonCalls();

}

function buttonCalls() {
  // Draws the buttons, only the appearance not function
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

  // Pool1 able to be clicked
  if (mouseX > poolX && mouseX < poolX + poolW && mouseY > poolY && mouseY < poolY + poolH && shouldGrow1) {
    startTime1 = millis();
    grow();
    shouldGrow1 = false;
  }

  // Pool2
  if (mouseX > poolX + poolHorizontalDist && mouseX < poolX + poolW + poolHorizontalDist && mouseY > poolY && mouseY < poolY + poolH && shouldGrow2) {
    startTime1 = millis();
    grow();
    shouldGrow2 = false;
  }

  // Pool3
  if (mouseX > poolX && mouseX < poolX + poolW && mouseY > poolY + poolVerticalDist && mouseY < poolY + poolH + poolVerticalDist && shouldGrow3) {
    startTime1 = millis();
    grow();
    shouldGrow3 = false;
  }

  // Pool4
  if (mouseX > poolX + poolHorizontalDist && mouseX < poolX + poolW + poolHorizontalDist && mouseY > poolY + poolVerticalDist && mouseY < poolY + poolH + poolVerticalDist && shouldGrow3) {
    startTime1 = millis();
    grow();
    shouldGrow4 = false;
  }
}

function shop() {
  // Will be shop
  // For now it is only background
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

  shouldGrow1 = true;
}

function start() {
  background(220);

  // Once there's enough game to have something to explain do it here
}

function grow() {
  // Use millies to make a five second delay 
  // Top left pool
  if (millis() < startTime1 + waitTime && oneClicked) {
    fill("red");
    rect(birthX, birthY, birthW, birthH);
  }
  // Top right pool
  if (millis() < startTime2 + waitTime && twoClicked) {
    fill("red");
    rect(birthX + poolW, birthY, birthW, birthH);
  }
  // Bottom left pool
  if (millis() < startTime3 + waitTime && threeClicked) {
    fill("red");
    rect(birthX, birthY + poolH, birthW, birthH);
  }
  // Bottom right pool
  if (millis() < startTime4 + waitTime && fourClicked) {
    fill("red");
    rect(birthX + poolW, birthY + poolH, birthW, birthH);
  }

}

class Crustacean {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.theImage = theImage;
    this.sizeW = 20;
    this.sizeH = 25;
  }
  
  display() {
    image(this.theImage, this.x, this.y, this.sizeW, this.sizeH);
  }

  
}