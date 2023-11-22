// Shrimp
// Laura Lima
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let whichScreen = "start";
let buttonRule, buttonFarm, buttonShop;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 100, 0);
}

function buttonCalls() {
  buttonRule = createButton("Rules");
  buttonRule.position(100, height - 60);
  buttonRule.size(60, 30);
  buttonRule.mousePressed(whichScreen = "start");


  buttonFarm = createButton("Farm");
  buttonFarm.position(200, height - 60);
  buttonFarm.size(60, 30);
  buttonFarm.mousePressed(whichScreen = "farm");

  buttonShop = createButton("Shop");
  buttonShop.position(300, height - 60);
  buttonShop.size(60, 30);
  buttonShop.mousePressed(TempPleaseForgiveMe);
}

function TempPleaseForgiveMe(){
  whichScreen = "shop";
}

function changeScreen() {
  if (whichScreen === "start"){
    // display rules/homescreen here
    background(100, 0, 0);
  }
  else if (whichScreen === "farm"){
    // display farm here
    background(0, 0, 100);
  }
  else if (whichScreen === "shop") {
    // displau shop here
    background(255);
  }
}

function draw() {
  changeScreen();
  buttonCalls();
}


class Crustacean {
  constructor() {

  }

  display() {

  }
}