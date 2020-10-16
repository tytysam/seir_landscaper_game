//console.log('test');

//each time user clicks, 1 day passes


//const input = prompt(put in your code here)

///////////
// Homework Resubmission
///////////

let totalMoney = 0;
let tools = ['teeth', 'scissors', 'lawnmower',
'fancy', 'team'];
let toolsCost = [{'teeth': 1}, {'scissors' : 5}, {'lawnmower': 25}, {'fancy':250}, {'team': 500}];
let toolsPayPerDay = [{'teeth': 1}, {'scissors' : 5}, {'lawnmower': 50}, {'fancy':100}, {'team': 250}];
let days = 0;

const teethMethod = () => {
    for (let i = 1; i < 6; i++) {
        const input = prompt(`\nMowing Lawn With Teeth\nDays worked: ${days += toolsCost[0].teeth}, Total Money in Bank Account: ${totalMoney += toolsPayPerDay[0].teeth}`)
    }
};
const scissorMethod = () => {
    totalMoney -= toolsCost[1].scissors;
    for (let i = 1; i < 6; i++) {
        const input = prompt(`\nMowing Lawn With Rusty Scissors\nDays worked: ${days += 1}, Total Money in Bank Account: ${totalMoney += toolsPayPerDay[1].scissors}`)
    }
};
const lawnMowerMethod = () => {
    totalMoney -= toolsCost[2].lawnmower;
    for (let i = 1; i < 6; i++) {
        const input = prompt(`\nMowing Lawn With Old-timey Push LawnMower\nDays worked: ${days += 1}, Total Money in Bank Account: ${totalMoney += toolsPayPerDay[2].lawnmower}`)
    }
};
const fancyMethod = () => {
    totalMoney -= toolsCost[3].fancy;
    for (let i = 1; i < 6; i++) {
        const input = prompt(`\nMowing Lawn With Fancy Battery-Powered Lawnmower\nDays worked: ${days += 1}, Total Money in Bank Account: ${totalMoney += toolsPayPerDay[3].fancy}`)
    }
};
const teamMethod = () => {
    totalMoney -= toolsCost[4].team;
    for (let i = 1; i < 6; i++) {
        const input = prompt(`\nMowing Lawn With Team of Starving Students\nDays worked: ${days += 1}, Total Money in Bank Account: ${totalMoney += toolsPayPerDay[4].team}`)
    if (totalMoney === 1000) {
        alert('You officially made $1000 and won the game!')
        }
    }
};


const play = () => {
    alert('Welcome new Landscaper! No time to wait, start cutting those lawns!');
    alert('You will now be using teeth to mow the lawn.');
    teethMethod();
    alert(`Congratulations! You now have $${totalMoney} in your bank account. You will now upgrade to Rusty Scissors`)
    alert(`Rusty Scissors cost $5 and will automatically be deducted from your bank account`)
    scissorMethod();
    alert(`Congratulations! You now have $${totalMoney} in your bank account. You will now upgrade to the Old-timey Push Lawnmower`)
    alert(`Old-timey Push Lawnmower costs $25 and will automatically be deducted from your bank account`)
    lawnMowerMethod();
    alert(`Congratulations! You now have $${totalMoney} in your bank account. You will now upgrade to the Fancy Battery-Powered Lawnmower`)
    alert(`Fancy Battery-Powered Lawnmower costs $250 and will automatically be deducted from your bank account`)
    fancyMethod();
    alert(`Congratulations! You now have $${totalMoney} in your bank account. You will now upgrade to the Team of Starving Students`)
    alert(`A Team of Starving Students costs $250 and will automatically be deducted from your bank account`)
    teamMethod();
}
play();
console.log(totalMoney)








// const mowLawnWithTeeth = (num) => {
//     for (let i = 1; i <= num; i ++) {
//         totalMoney += 1;
//     }
// }
// const playGame = () => {
//     mowLawnWithTeeth(5);
//     if (totalMoney === 5) {

//     }
// }

// const checkMoney = (money) => {
//     if (money >= 500) {
//         totalMoney - 500;
//         teamMethod();
//     } else if ( money >= 250) {
//         totalMoney - 250;
//         fancyMethod();
//     } else if (money >= 25) {
//          totalMoney - 25;
//          lawnmowerMethod();
//     } else (money >= 5) {
//          totalMoney - 5;
//          scissorMethod();
//     }
// };

// // Teeth, $1/day
// const teethMethod = (days) => {
//     for (let i = 1; i <= days; i++) {
//         totalMoney += 1;
//         console.log(totalMoney);
//         //console.log(checkMoney(totalMoney));
//     };
//     return totalMoney;
// };
// //console.log(teethMethod(5));

// //Rusty Scissors, $5/day
// const scissorMethod = (days) => {
//     for (let i = 1; i <= days; i++) {
//         totalMoney += 5;
//         console.log(totalMoney);
//         //console.log(checkMoney(totalMoney));
//     };
//     return totalMoney;
// };
// //console.log(scissorMethod(5));

// //Old-timey Push Lawnmower
// const lawnmowerMethod = (days) => {
//     for (let i = 0; i <= days; i++) {
//         totalMoney += 50;
//         console.log(totalMoney);
//         //console.log(checkMoney(totalMoney));
//     };
//     return totalMoney;
// };
// //console.log(lawnmowerMethod(5));

// //Fancy Battery-Powered Lawnmower
// const fancyMethod = (days) => {
//     for (let i = 0; i <= days; i++) {
//         totalMoney += 100;
//         console.log(totalMoney);
//         //console.log(checkMoney(totalMoney));
//     };
//     return totalMoney;
// };
// //console.log(fancyMethod(5));

// //Team of Starving Students
// const teamMethod = (days) => {
//     for (let i = 0; i <= days; i++) {
//         totalMoney += 250;
//         console.log(totalMoney);
//         //console.log(checkMoney(totalMoney));
//     };
//     return totalMoney;
// };
// //console.log(teamMethod(5));

// // OR

// const user = {
//     tool: ['teeth', 'scissors', 'lawnmower', 'fancy','team'],
//     daysWorked: 1,
// };

// if (user.tool === 'teeth') {
    
// }
// // function that iterates over tool and performs based on its value
// const cutGrass = (user, )
// // function that adds 1 day every time user clicks/ works 
// const
// const earnPerDay = {
//     teeth: 1,
//     scissors: 5,
//     lawnmower: 50,
//     fancy: 100,
//     team: 250
// 
