//dice will need to become objects with a roll value and placement within the array.
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

//rollButton.addEventListener('click', rollDice)
rollButton.addEventListener('click', rollAllDice)
let leftDice = diceArray.length

function rollAllDice() {
    //console.log(diceArray)
    let i = 0;

    while (i < diceArray.length) {

        let rolledDie = Math.floor(Math.random() * 6) + 1;

        displayDiceGraphic(rolledDie);
        //!if rolled die is 6  and we don't have a six, put into success array. if we have a six and rolled die is 5, add to success array. if we have a six and 5 and rolled die is 4, add to success array. Once success is achieved, roll doubles. 


        /*
        I don't think this is the answer
                if (rolledDie == 6){
                    dice0 = 6;
                    console.log(dice0);
                    winningArray.push(dice0)
                    console.log(winningArray)
                }
        */

        rolledArray.push(rolledDie);
        i++;
    }

    console.log(rolledArray)
    let grabSix = rolledArray.find(num => num == 6);
    if (grabSix && needSix) {


        //!limit 6 graphic to just one and delete a rollable die from the array
        



        let winningDisplay = document.createElement("img");
        winningDisplay.src = "./media/six.png"
        let winRow = document.querySelector(".keptDice");
        winRow.append(winningDisplay);
        needSix = false;

        diceArray.pop();

    }
    

}

/*
let testArray3 =[]
let ice0 = 6;
let ice1 = 0;
let ice2 = 0;
let ice3 = 0;
let ice4 = 0;

numberHunt();

function numberHunt(){
    if (ice0 == 6){
        testArray3.push(ice0)
        console.log(testArray3)
    }
}

*/
/*

let testArray=[10, 52, 6, 89, 6, 12, 24];
let testArray2 = []

//if a 6 is rolled, add it to new array

let grabSix = testArray.find(num => num == 6);
if (grabSix ){

    console.log(grabSix + "  this is grabSix");
    console.log(testArray)
    testArray2.push(grabSix);
    console.log(testArray2)

    
}
*/

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

