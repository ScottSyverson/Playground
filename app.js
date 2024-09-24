
let dice0 = 0;
let dice1 = 0;
let dice2 = 0;
let dice3 = 0;
let dice4 = 0;
let diceArray = [dice0, dice1, dice2, dice3, dice4]
let rollButton = document.getElementById('rollButton');

/*
THIS ALSO WORKS
rollButton.addEventListener('click', ()=>{
    console.log("good")
    dice1 = Math.floor(Math.random() * 6) + 1;
    console.log(dice1)
})
*/

//rollButton.addEventListener('click', rollDice)
rollButton.addEventListener('click', rollAllDice)
let leftDice = diceArray.length
function rollAllDice() {
    console.log(diceArray)
    let i = 0;

    while (i < diceArray.length) {
        let curDice = `dice${i}`
        console.log(curDice)
        curDice = Math.floor(Math.random() * 6) + 1;
        displayDiceGraphic(curDice)
        i++;
    }
}



function rollDice() {
    dice1 = Math.floor(Math.random() * 6) + 1;
    //console.log(dice1)
    //displayDiceNumber(dice1)
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

function displayDiceGraphic(num) {

    // when recreating this, you only need to change the display.src part for each number and 
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

