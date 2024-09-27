
let diceArray = [0, 0, 0, 0, 0]
let rollButton = document.getElementById('rollButton');
let rolledArray = []
let winningArray = []
let needSix = true;
let needFive = true;
let needFour = true;
let needDoubles = true;

rollButton.addEventListener('click', rollAllDice)

//! need a way to limit the number of rolls to 3

function rollAllDice() {

    let clearImages = document.querySelectorAll(".diceDisplay img")

    for (let index = 0; index < clearImages.length; index++) {
        clearImages[index].remove();
        
    }
    
    let i = 0;
    while (i < diceArray.length) {

        let rolledDie = Math.floor(Math.random() * 6) + 1;
        displayDiceGraphic(rolledDie);
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
        //remove the six from the array
        let index6 = rolledArray.indexOf(6);
        if (index6 > -1) { // only splice array when item is found
            rolledArray.splice(index6, 1); // 2nd parameter means remove one item only
        }

        //console.log("rolledArray  " + rolledArray)


        diceArray.pop();

    }

    let grabFive = rolledArray.find(num => num == 5);
    if (grabFive && needFive && !needSix) {
        let winningDisplay = document.createElement("img");
        winningDisplay.src = "./media/five.png"
        let winRow = document.querySelector(".keptDice");
        winRow.append(winningDisplay);
        needFive = false;
        let index5 = rolledArray.indexOf(5);
        if (index5 > -1) { // only splice array when item is found
            rolledArray.splice(index5, 1); // 2nd parameter means remove one item only
        }

        diceArray.pop();

    }

    let grabFour = rolledArray.find(num => num == 4);
    if (grabFour && needFour && !needFive && !needSix) {
        let winningDisplay = document.createElement("img");
        winningDisplay.src = "./media/four.png"
        let winRow = document.querySelector(".keptDice");
        winRow.append(winningDisplay);
        needFour = false;
        let index4 = rolledArray.indexOf(4);
        if (index4 > -1) { // only splice array when item is found
            rolledArray.splice(index4, 1); // 2nd parameter means remove one item only
        }
        diceArray.pop();

    }

    if (!needFour && !needFive && !needSix) {

        if(rolledArray[0] == rolledArray[1]){
            console.log("you win")
        }


        console.log(rolledArray[0])
        console.log(rolledArray[1])
    }

    console.log("end array  " + rolledArray)
    rolledArray = [];

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

