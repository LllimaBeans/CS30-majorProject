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

// Different images for background
// let bgStart = 
// let bgFarm = 
// let bgShop = 

function preload() {
  // When you get around to images
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Temp background, get a sprite or smth
  background(220);
  buttonY = height - 50;
}

function draw() {
  // Display buttons
  buttonCalls();
}

function buttonCalls() {
  // Draws the buttons, only appearance not the functionality
  fill("black");
  rect(buttonX, buttonY, buttonW, buttonH);
  rect(buttonX + buttonSpace, buttonY, buttonW, buttonH);
  rect(buttonX + buttonSpace * 2, buttonY, buttonW, buttonH);
}

// Use for backgrounds? Maybe?
function displayScreen() {
  // if (whichScreen === "start") {
  //   displayStart();
  // }
  // else if (whichScreen === "farm") {
  //   displayFarm();
  // }
  // else if (whichScreen === "shop") {
  //   displayShop();
  // }
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
    oneClicked = true; // Set the corresponding flag
    grow();
    shouldGrow1 = false;
  }

  // Pool2
  if (mouseX > poolX + poolHorizontalDist && mouseX < poolX + poolW + poolHorizontalDist && mouseY > poolY && mouseY < poolY + poolH && shouldGrow2) {
    startTime2 = millis();
    twoClicked = true;
    grow();
    shouldGrow2 = false;
  }

  // Pool3
  if (mouseX > poolX && mouseX < poolX + poolW && mouseY > poolY + poolVerticalDist && mouseY < poolY + poolH + poolVerticalDist && shouldGrow3) {
    startTime3 = millis();
    threeClicked = true;
    grow();
    shouldGrow3 = false;
  }

  // Pool4
  if (mouseX > poolX + poolHorizontalDist && mouseX < poolX + poolW + poolHorizontalDist && mouseY > poolY + poolVerticalDist && mouseY < poolY + poolH + poolVerticalDist && shouldGrow4) {
    startTime4 = millis();
    fourClicked = true;
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
  // Probably just make an image elsewhere that has instructions on it, like a title page
  // Figuring out text seems like a waste of time
}

function grow() {
  // Use millis to make a five-second delay
  // Do something that allows them to be harvested, like clicking after they've spawned
  // Top left pool
  if (oneClicked && millis() - startTime1 < waitTime) {
    fill("red");
    rect(birthX, birthY, birthW, birthH);
  }
  // Top right pool
  if (twoClicked && millis() - startTime2 < waitTime) {
    fill("red");
    rect(birthX + poolW, birthY, birthW, birthH);
  }
  // Bottom left pool
  if (threeClicked && millis() - startTime3 < waitTime) {
    fill("red");
    rect(birthX, birthY + poolH, birthW, birthH);
  }
  // Bottom right pool
  if (fourClicked && millis() - startTime4 < waitTime) {
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
  
  // Use this to display crustaceans when growing
  display() {
    image(this.theImage, this.x, this.y, this.sizeW, this.sizeH);
  }

  // Use this to make them grow, image of "planted" and then full grown
  update() {

  }
}

// Make millis work
// Start designing store

// In store there should be some type of cash register
// Have a place that either displays pictures with text or the text itself
// proper text is probably the way to go if i can figure it out

// maybe have some type of background fo rthe buttons

// make the harvest thing work --> gotta get millis working