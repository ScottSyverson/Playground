
let dice0 = 0;
let dice1 = 0;
let dice2 = 0;
let dice3 = 0;
let dice4 = 0;
let diceArray = [dice0, dice1, dice2, dice3, dice4]
let rollButton = document.getElementById('rollButton');
let rolledArray = []
let winningArray = []
let needSix = true;


rollButton.addEventListener('click', rollAllDice)
let leftDice = diceArray.length

function rollAllDice() {
    //console.log(diceArray)
    let i = 0;

    while (i < diceArray.length) {

        let rolledDie = Math.floor(Math.random() * 6) + 1;

        displayDiceGraphic(rolledDie);
        //!if rolled die is 6  and we don't have a six, put into success array. if we have a six and rolled die is 5, add to success array. if we have a six and 5 and rolled die is 4, add to success array. Once success is achieved, roll doubles. 

        rolledArray.push(rolledDie);
        i++;
    }

    console.log(rolledArray)
    let grabSix = rolledArray.find(num => num == 6);
    if (grabSix && needSix) {

        let winningDisplay = document.createElement("img");
        winningDisplay.src = "./media/six.png"
        let winRow = document.querySelector(".keptDice");
        winRow.append(winningDisplay);
        needSix = false;

        diceArray.pop();

    }
    

}



function displayDiceGraphic(num) {
    // when recreating this, you only need to change the display.src part for each number and put the rest at the bottom
    let display = document.createElement("img");
    if (num == 6) {
        display.src = "./media/six.png"
        let pic = document.querySelector(".diceDisplay");
        pic.append(display);
    } else if (num == 5) {
        display.src = "./media/five.png"
        let pic = document.querySelector(".diceDisplay");
        pic.append(display);
    } else if (num == 4) {
        display.src = "./media/four.png"
        let pic = document.querySelector(".diceDisplay");
        pic.append(display);
    } else if (num == 3) {
        display.src = "./media/three.png"
        let pic = document.querySelector(".diceDisplay");
        pic.append(display);
    } else if (num == 2) {
        display.src = "./media/two.png"
        let pic = document.querySelector(".diceDisplay");
        pic.append(display);
    } else if (num == 1) {
        display.src = "./media/one.png"
        let pic = document.querySelector(".diceDisplay");
        pic.append(display);
    }

}


//this function rolls a single die. Isn't needed, but is being kept in case future testing requires it
function rollDice() {
    dice1 = Math.floor(Math.random() * 6) + 1;
    displayDiceGraphic(dice1)
}

//display the number -- this function is not needed in the final project but is for testing purposes
function displayDiceNumber(input) {
    let roll = "";
    roll = document.createElement("h1");
    roll.innerHTML = input;
    let currentDiceRoll = document.querySelector(".here");
    currentDiceRoll.append(roll);
}

