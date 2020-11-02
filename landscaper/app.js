//  ============================
//  Landscaper PSEUDOCODE
//  ============================

// --> TOOLs: 1.) Teeth 2.) Rusty Scissors 3.) Old-Timey Push Mower
// --> TOOLs: 4.) Fancy Battery-Powered Lawnmower 5.) Team of Starving Students

// Because of how many tools we have, I'm thinking I want to use a class constructor
// to quickly build the tool objects with shared properties..
//
// days will pass
// we will accumulate money in some way...
// and we can spend that money on tools...
//
//
// USER INPUTS --> Reset, Cut the Grass, OR Buy/Upgrade a new Tool (if you have enough money)
//
// Winning message: Congratulations, you've won! It took you ${days} to accumulate $1,000.
// Since day one, you've clipped ${#ofLawns} and grossed total earnings of ${totalDollarsMade}.
// Think you can create a landscaping empire in even better time? Play again --> Button.
//
//
//
// Day 0: Introduce the game, explain the rules, explain the goal, etc.
// Day 1: You spent all day mowing lawns with your teeth. Maybe not the most effective, but it earned you a dollar!
//
//
//
// DELIVERABLES:
// 1.) The ability to take user input
// 2.) The ability for the user to earn money
// 3.) The ability to buy tools and use the new tool
// 4.) The ability to win the game and end it
// 5.) The ability to reset the game at any point so that you can play again.
// 6.) Make it so that the user can have multiple tools
// 7.) ONce you've implemented multiple tools, make it so you can sell tools for half their price.
// 8.) Make the game playable via the DOM via BUTTONS (see --> Lapis, Papyrus, Scalpellus)
// 9.)
//
//
//
//
//
// ============================================
// LANDSCAPER - PROJECT CODE
// ============================================

// --> GENERATE OUR TOOLS
class LandscapingTool {
  constructor(name, moneyEarned, toolCost) {
    this.name = name;
    this.moneyEarned = moneyEarned;
    this.toolCost = toolCost;
  }
}

let yourTeeth = new LandscapingTool("your teeth", 1, 0);
let rustyScissors = new LandscapingTool(
  "a pair of rusty, trusty scissors",
  5,
  5
);
let pushMower = new LandscapingTool(
  "an old-timey push mower just like your grandpa had!",
  50,
  25
);
let batteryOpMower = new LandscapingTool(
  "a battery-powered mower! Does it ever need charged? Who knows...",
  100,
  250
);
let studentTeam = new LandscapingTool(
  "a team of college students: they never sleep (they *DID* however ask for course credit)",
  250,
  500
);

// --> GLOBAL VARIABLES
let tool = yourTeeth.name;
let money = 0;
let toolCost = 0;
let moneyPerJob = yourTeeth.moneyEarned;
let sumMoneyEarned = yourTeeth.moneyEarned;
let days = 0;
let action = null;

//   checkForWinner() {
//     if (money >= winningMoney) {
//       gameInfo.alertWinner();
//     }
//   },
// };

// --> WINNING GAME PARAMETERS
// ***** ADJUST VALUE OF winningMoney WHEN TESTING TO ACCELERATE TESTING *****
const winningMoney = 1000;
const winningMoneyString = `Congratulations, you've won! It took you ${days} to accumulate $1,000 at once. Since day one, you've clipped ${days} lawns and grossed total earnings of ${sumMoneyEarned}.
Think you can create a landscaping empire in even better time?`;

// --> Helper Methods
const gamePlay = {
  cutGrass() {
    days++;
    if (money < winningMoney) {
      // Switch Syntax Reference: https://www.w3schools.com/js/js_switch.asp
      switch (tool) {
        case yourTeeth.name:
          money += yourTeeth.moneyEarned;
          moneyPerJob += yourTeeth.moneyEarned;
          sumMoneyEarned += yourTeeth.moneyEarned;
          break;
        case rustyScissors.name:
          money += rustyScissors.moneyEarned;
          moneyPerJob += rustyScissors.moneyEarned;
          sumMoneyEarned += rustyScissors.moneyEarned;
          break;
        case pushMower.name:
          money += pushMower.moneyEarned;
          moneyPerJob += pushMower.moneyEarned;
          sumMoneyEarned += pushMower.moneyEarned;
          break;
        case batteryOpMower.name:
          money += batteryOpMower.moneyEarned;
          moneyPerJob += batteryOpMower.moneyEarned;
          sumMoneyEarned += batteryOpMower.moneyEarned;
          break;
        case studentTeam.name:
          money += studentTeam.moneyEarned;
          moneyPerJob += studentTeam.moneyEarned;
          sumMoneyEarned += studentTeam.moneyEarned;
          break;
      }
    } else {
      gameInfo.alertWinner();
    }
  },

  checkForEnoughMoney() {
    if (money >= studentTeam.toolCost && tool === batteryOpMower.name) {
      gamePlay.buyOptions.buyStudentTeam();
      this.newPurchase(tool);
    } else if (money >= batteryOpMower.toolCost && tool === pushMower.name) {
      gamePlay.buyOptions.buyBatteryOpMower();
      this.newPurchase(tool);
    } else if (money >= pushMower.toolCost && tool === rustyScissors.name) {
      gamePlay.buyOptions.buyPushMower();
      this.newPurchase(tool);
    } else if (money >= rustyScissors.toolCost && tool === yourTeeth.name) {
      gamePlay.buyOptions.buyRustyScissors();
      this.newPurchase(tool);
    } else {
      console.log("Sorry, you don't have enough money to buy a new tool yet!");
    }
  },

  newPurchase(tool) {
    console.log(`Congrats! You are now the proud owner of ${tool}`);
  },

  buyOptions: {
    buyRustyScissors() {
      cost = rustyScissors.toolCost;
      money -= cost;
      tool = rustyScissors.name;
      moneyPerJob = rustyScissors.moneyEarned;
    },

    buyPushMower() {
      cost = pushMower.toolCost;
      money -= cost;
      tool = pushMower.name;
      moneyPerJob = pushMower.moneyEarned;
    },

    buyBatteryOpMower() {
      cost = batteryOpMower.toolCost;
      money -= cost;
      tool = batteryOpMower.name;
      moneyPerJob = batteryOpMower.moneyEarned;
    },

    buyStudentTeam() {
      cost = studentTeam.toolCost;
      money -= cost;
      tool = studentTeam.toolCost;
      moneyPerJob = studentTeam.moneyEarned;
    },
  },
};

// --> START THE GAME.

while (action !== "stop") {
  action = prompt(
    "Enter 'snip' to cut the grass, 'buy' to upgrade your tool, or 'stop' to end the game",
    "What would you like to do?"
  );
  if (action === "snip") {
    gamePlay.cutGrass();
  } else if (action === "buy") {
    gamePlay.checkForEnoughMoney();
  }
  console.log(`You currently have ${money} dollars.`);
}
if (money >= winningMoney) {
  console.log(winningMoneyString);
}
