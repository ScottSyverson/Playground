let diceArray = [0, 0, 0, 0, 0]
let rolledArray = []
let winningArray = []
let needSix = true;
let needFive = true;
let needFour = true;
let needDoubles = true;
let canRoll = true;
let counter = 0;

rollButton.addEventListener('click', handleButtonClick)
rulesButton.addEventListener('click', displayRules)
newGame.addEventListener('click', resetGame)

function displayRules() {
    alert("The player must roll a 6, a 5, and a 4 in that order. These numbers, when rolled, are set aside and are not rolled by the player again. Once these numbers are rolled, the remaining 2 dice are rolled together.  If doubles of any number are rolled, the player recieves a free drink. The player has three rolls to accomplish this.")
}

function resetGame() {
    //enable roll button
    document.getElementById('rollButton').disabled = false;
    let clearImages = document.querySelectorAll(".diceDisplay img")
    for (let index = 0; index < clearImages.length; index++) {
        clearImages[index].remove();
    }
    //clear the dice
    clearImages = document.querySelectorAll(".keptDice img")
    for (let index = 0; index < clearImages.length; index++) {
        clearImages[index].remove();
    }
    clearImages = document.querySelectorAll(".winOrLose img")
    for (let index = 0; index < clearImages.length; index++) {
        clearImages[index].remove();
    }

    //reset variables
    clickCount = 0;
    diceArray.length = 5;
    winningArray = []
    needSix = true;
    needFive = true;
    needFour = true;
    needDoubles = true;
    canRoll = true;
    gotDoubles = false;
    return clickCount;
}

let clickCount = 0;
//!remember to adjust the maxClicks
let maxClicks = 3;

function handleButtonClick() {
    clickCount++;
    if (clickCount > maxClicks) {


        // Disable the button
        document.getElementById('rollButton').disabled = true;
        //if you're out of rolls
        let winTextDisplay = document.createElement("img");
        winTextDisplay.src = "./media/willy-wonka-and-the-chocolate-factory-gene-wilder.gif"
        let wOrLDisplay = document.querySelector(".winOrLose");

        wOrLDisplay.append(winTextDisplay);



    } else {
        rollAllDice();
    }
}

function rollAllDice() {
    //CLEARING THE DISPLAY
    let clearImages = document.querySelectorAll(".diceDisplay img")
    for (let index = 0; index < clearImages.length; index++) {
        clearImages[index].remove();
    }
    //ROLLING AVAILABLE DICE
    let i = 0;
    while (i < diceArray.length) {
        //EACH DIE IS ASSIGNED A RANDOM NUMBER
        let rolledDie = Math.floor(Math.random() * 6) + 1;
        //EACH DIE IS DISPLAYED
        displayDiceGraphic(rolledDie);
        //EACH DIE IS ADDED TO THE ARRAY
        rolledArray.push(rolledDie);
        i++;
    }

    //grab a six from the array if it is present
    let grabSix = rolledArray.find(num => num == 6);
    if (grabSix && needSix) {

        //display the dice image in the kept dice area
        let winningDisplay = document.createElement("img");
        winningDisplay.src = "./media/six.png"
        let winRow = document.querySelector(".keptDice");
        setTimeout(() => {
            winRow.append(winningDisplay);
        }, 800);

        needSix = false;
        //remove the six from the array
        let index6 = rolledArray.indexOf(6);
        if (index6 > -1) { // only splice array when item is found
            rolledArray.splice(index6, 1); // 2nd parameter means remove one item only
        }
        diceArray.pop(); //reduces the number of rollable dice by one
    }

    let grabFive = rolledArray.find(num => num == 5);
    if (grabFive && needFive && !needSix) {

        let winningDisplay = document.createElement("img");
        winningDisplay.src = "./media/five.png"
        let winRow = document.querySelector(".keptDice");
        setTimeout(() => {
            winRow.append(winningDisplay);
        }, 1000);
        needFive = false;
        let index5 = rolledArray.indexOf(5);
        if (index5 > -1) {
            rolledArray.splice(index5, 1);
        }
        diceArray.pop();
    }
    let grabFour = rolledArray.find(num => num == 4);
    if (grabFour && needFour && !needFive && !needSix) {
        let winningDisplay = document.createElement("img");
        winningDisplay.src = "./media/four.png"
        let winRow = document.querySelector(".keptDice");
        setTimeout(() => {
            winRow.append(winningDisplay);
        }, 800);
        needFour = false;
        let index4 = rolledArray.indexOf(4);
        if (index4 > -1) {
            rolledArray.splice(index4, 1);
        }
        diceArray.pop();
    }

    if (!needFour && !needFive && !needSix) {
        //if doubles are rolled

        if (rolledArray[0] === rolledArray[1]) {

            gotDoubles = true;
            let winTextDisplay = document.createElement("img");
            winTextDisplay.src = "./media/skeptical-futurama.gif"
            let wOrLDisplay = document.querySelector(".winOrLose");
            setTimeout(() => {
                wOrLDisplay.append(winTextDisplay);
            }, 700);

            document.getElementById('rollButton').disabled = true;

        }
    }
    //clear the array
    rolledArray = [];
}

function displayDiceGraphic(num) {

    let display = document.createElement("img");

    if (num == 6) {
        display.src = "./media/six.png"

    } else if (num == 5) {
        display.src = "./media/five.png"

    } else if (num == 4) {
        display.src = "./media/four.png"

    } else if (num == 3) {
        display.src = "./media/three.png"

    } else if (num == 2) {
        display.src = "./media/two.png"

    } else if (num == 1) {
        display.src = "./media/one.png"
    }
    setTimeout(() => {
        let pic = document.querySelector(".diceDisplay");
        pic.append(display);
    }, 300);

}