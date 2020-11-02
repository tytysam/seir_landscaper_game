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

// --> GLOBAL VARIABLES
let tool = yourTeeth.name;
let money = 0;
let toolCost;
let moneyPerJob = yourTeeth.moneyEarned;
let sumMoneyEarned;
let days = 0;
let action = null;

// --> IMAGES

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
  2,
  5
);
let pushMower = new LandscapingTool(
  "an old-timey push mower like your grandpa had",
  25,
  50
);
let batteryOpMower = new LandscapingTool(
  "does it ever need charged? who knows...",
  50,
  250
);
let studentTeam = new LandscapingTool(
  "a team of college students: they never sleep (just make sure they receive course credit)",
  100,
  500
);

//GAME SETUP
// const gameSetup = {
//   initializeGame() {
//     tool = yourTeeth.name;
//     money = 0;
//     days = 0;
//     moneyPerJob = yourTeeth.moneyEarned;
//   },

//   checkForWinner() {
//     if (money >= winningMoney) {
//       gameInfo.alertWinner();
//     }
//   },
// };

// --> WINNING GAME PARAMETERS
// ***** ADJUST VALUE OF winningMoney WHEN TESTING TO ACCELERATE TESTING *****
const winningMoney = 1000;
const winningMoneyString = `Congratulations, you've won! It took you ${days} to accumulate $1,000. Since day one, you've clipped ${days} lawns and grossed total earnings of ${sumMoneyEarned}.
Think you can create a landscaping empire in even better time?`;

// --> START THE GAME.

while()
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
          // gameSetup.updateShowCheckFunction();
          break;
      }
    } else {
      gameInfo.alertWinner();
    }
  },

  checkForEnoughMoney() {
    if (money >= studentTeam.toolCost && tool === batteryOpMower.name) {
      gamePlay.buyOptions.buyStudentTeam();
    } else if (money >= batteryOpMower.toolCost && tool === pushMower.name) {
      gamePlay.buyOptions.buyBatteryOpMower();
    } else if (money >= pushMower.toolCost && tool === rustyScissors.name) {
      gamePlay.buyOptions.buyPushMower();
    } else if (money >= rustyScissors.cost && tool === yourTeeth.name) {
      gamePlay.buyOptions.buyRustyScissors();
    } else {
      //$stop.get(0).play();
      //$infoStatus.text("Sorry, you don't have enough money to buy a new tool yet!");
    }
  },

  buyOptions: {
    buyRustyScissors() {
      //$cash.get(0).play();
      cost = rustyScissors.toolCost;
      money -= cost;
      tool = rustyScissors.name;
      moneyPerJob = rustyScissors.moneyEarned;
      //   gameSetup.updateShowAlertFunction();
    },

    buyPushMower() {
      //$cash.get(0).play();
      cost = pushMower.toolCost;
      money -= cost;
      tool = pushMower.name;
      moneyPerJob = pushMower.moneyEarned;
      //   gameSetup.updateShowAlertFunction();
    },

    buyBatteryOpMower() {
      //$cash.get(0).play();
      cost = batteryOpMower.toolCost;
      money -= cost;
      tool = batteryOpMower.name;
      moneyPerJob = batteryOpMower.moneyEarned;
      //   gameSetup.updateShowAlertFunction();
    },

    buyStudentTeam() {
      //$cash.get(0).play();
      cost = studentTeam.toolCost;
      money -= cost;
      tool = studentTeam.toolCost;
      moneyPerJob = studentTeam.moneyEarned;
      //   gameSetup.updateShowAlertFunction();
      //   $buyToolsButton.hide();
    },
  },
};

// --> GAME INFO
const gameInfo = {
  alertText() {
    if (tool === studentTeam.name) {
      // $infoStatus.text("You have hired " + tool + " for $" + cost +"!  Using this tool will earn you $" + amountEarned + " each day!");
    } else {
      // $infoStatus.text("You have purchased " + tool + " for $" + cost +"!  Using this tool will earn you $" + amountEarned + " each day!");
    }
  },
  alertWinner() {
    // $winner.get(0).play();
    // $infoStatus.text("Congratulations!  In " + days + " days you have made $" + money + " with the help of your tools!  You have won the game!");
    // $question.empty();
    // $buttonRowPlay.empty();
  },
};

//EVENT LISTENERS
// $startButton.on("click", gameSetup.startGame);
// $restartButton.on("click", gameSetup.resetGame);

// $landscapeButton.on("click", gamePlay.runLandscape);
// $buyToolsButton.on("click", gamePlay.checkForEnoughMoney);
// $howToPlayButton.on("click", htmlContent.openModal);
// $closeButton.on("click", htmlContent.closeModal);

//Start the game fucntion.
