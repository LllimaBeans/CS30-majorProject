// Place to test functions so i don't ruin my actual project

// MAKE SURE TO DELETE THIS BEFORE SUBMITTING

let whichScreen = "start";
let buttonX = 50;
let buttonY;
let buttonW = 50;
let buttonH = 30;
let buttonSpace = 100;

let pools = [];
let crustaceans = [];

let pool1, pool2, pool3, pool4;
let poolX;
let poolY;
let poolW;
let poolH;
let poolVerticalDist;
let poolHorizontalDist;

let waitTime = 2000;
let crustaceanImg;

function preload() {
  // Load your images here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  buttonY = height - 50;

  // Initialize pools
  initializePools();
}

function draw() {
  buttonCalls();
  displayScreen();
}

function initializePools() {
  for (let i = 0; i < 4; i++) {
    let pool = {
      x: poolX + i % 2 * poolHorizontalDist,
      y: poolY + Math.floor(i / 2) * poolVerticalDist,
      w: poolW,
      h: poolH,
      shouldGrow: false,
      startTime: 0,
    };
    pools.push(pool);
  }
}

function buttonCalls() {
  fill("black");
  for (let i = 0; i < 3; i++) {
    rect(buttonX + i * buttonSpace, buttonY, buttonW, buttonH);
  }
}

function displayScreen() {
  if (whichScreen === "start") {
    start();
  } 
  else if (whichScreen === "farm") {
    farm();
  } 
  else if (whichScreen === "shop") {
    shop();
  }
}

function mousePressed() {
  for (let i = 0; i < 3; i++) {
    let buttonBounds = {
      left: buttonX + i * buttonSpace,
      right: buttonX + i * buttonSpace + buttonW,
      top: buttonY,
      bottom: buttonY + buttonH,
    };

    if (
      mouseX > buttonBounds.left &&
      mouseX < buttonBounds.right &&
      mouseY > buttonBounds.top &&
      mouseY < buttonBounds.bottom
    ) {
      if (i === 0) {
        shop();
      } 
      else if (i === 1) {
        farm();
      } 
      else if (i === 2) {
        start();
      }
    }
  }

  for (let i = 0; i < pools.length; i++) {
    let poolBounds = {
      left: pools[i].x,
      right: pools[i].x + pools[i].w,
      top: pools[i].y,
      bottom: pools[i].y + pools[i].h,
    };

    if (
      mouseX > poolBounds.left &&
      mouseX < poolBounds.right &&
      mouseY > poolBounds.top &&
      mouseY < poolBounds.bottom &&
      pools[i].shouldGrow
    ) {
      pools[i].startTime = millis();
      grow(i);
      pools[i].shouldGrow = false;
    }
  }
}

function shop() {
  background(220);
}

function farm() {
  background(220);
  fill("blue");

  for (let i = 0; i < pools.length; i++) {
    rect(pools[i].x, pools[i].y, pools[i].w, pools[i].h);
  }

  pools[0].shouldGrow = true;
}

function start() {
  background(220);
}

function grow(poolIndex) {
  let pool = pools[poolIndex];

  if (millis() - pool.startTime < waitTime) {
    let crustacean = new Crustacean(pool.x + pool.w / 2, pool.y + pool.h / 2, crustaceanImg);
    crustaceans.push(crustacean);
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

  update() {
    // Add logic for crustacean growth/update if needed
  }
}

// 1. Menu Bar:
//    - Create buttons for shop and farm screens.
//    - Implement functions for switching screens.

// // Define screen variables
// let currentScreen = "start";

// // Function to switch screens
// function switchScreen(screen) {
//   currentScreen = screen;
// }
// ```

// 2. Farm:
//    - Display four pools with different crustacean types.
//    - Implement a side menu to select eggs.
//    - Implement crustacean growth function in each pool.
//    - Implement a harvest function.
//    - Display a counter for harvested crustaceans.

// // Define pool variables
// let pools = [
//   { type: "shrimp", count: 0, growthTime: 5000 },
//   { type: "lobster", count: 0, growthTime: 8000 },
//   { type: "crab", count: 0, growthTime: 10000 },
//   // Add more pool types as needed
// ];

// // Function to grow crustaceans
// function growCrustaceans(poolIndex) {
//   let pool = pools[poolIndex];
//   if (pool.count === 0) {
//     pool.count++;
//     setTimeout(() => {
//       pool.count++;
//     }, pool.growthTime);
//   }
// }

// // Function to harvest crustaceans
// function harvestCrustaceans(poolIndex) {
//   let pool = pools[poolIndex];
//   if (pool.count > 0) {
//     pool.count--;
//     // Add logic to store harvested crustaceans
//   }
// }
// ```

// 3. Growing Crustaceans:
//    - Implement a function to grow crustaceans with a timer.
//    - Add a visual cue for harvest readiness.
//    - Implement a harvest function that updates the crustacean count.

// // Function to visually cue harvest readiness
// function cueHarvestReadiness(poolIndex) {
//   // Change pool color or display an icon when crustaceans are ready to harvest
// }

// // Function to update crustacean count on harvest
// function updateCrustaceanCount(poolIndex) {
//   // Update UI to reflect harvested crustaceans
// }
// ```

// 4. Shop:
//    - Display customer orders.
//    - Implement a function to sell crustaceans.
//    - Simulate different customer orders.
//    - Update crustacean count and currency upon successful sales.

// // Define customer order variables
// let customerOrders = [
//   { type: "shrimp", quantity: 3 },
//   { type: "lobster", quantity: 2 },
//   // Add more customer orders as needed
// ];

// // Function to display customer orders
// function displayCustomerOrders() {
//   // Render customer orders on the shop screen
// }

// // Function to sell crustaceans
// function sellCrustaceans(orderIndex) {
//   let order = customerOrders[orderIndex];
//   // Check if player has enough crustaceans to fulfill the order
//   // Deduct sold crustaceans from the count
//   // Update currency based on the sale
// }
// ```

// 5. Start Screen:
//    - Display instructions for the game.
//    - Provide information on controls and objectives.

// // Function to display instructions
// function displayInstructions() {
//   // Render instructions on the start screen
// }
// ```

// 6. Customers;
//    - Simulate customer orders with different crustacean preferences.
//    - Track completed orders and update crustacean count and currency accordingly.

// // Function to simulate customer orders
// function simulateCustomerOrders() {
//   // Generate random orders and add them to customerOrders array
// }

// // Function to track completed orders
// function trackCompletedOrders() {
//   // Check if player fulfilled any customer orders
//   // Update crustacean count and currency accordingly
// }
// ```

// 7. Side Menu:
//    - Implement a side menu in the farm to select eggs.
//    - Allow users to choose different types of eggs for each pool.

// // Define egg options
// let eggOptions = ["shrimp", "lobster", "crab"];

// // Function to render side menu
// function renderSideMenu() {
//   // Display egg options for each pool
// }

// // Function to select eggs from the side menu
// function selectEgg(poolIndex, eggType) {
//   // Allow the player to choose eggs for each pool
// }
