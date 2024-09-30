
let diceArray = [0, 0, 0, 0, 0]
let rollButton = document.getElementById('rollButton');
let rolledArray = []
let winningArray = []
let needSix = true;
let needFive = true;
let needFour = true;
let needDoubles = true;
let canRoll = true;
let counter = 0;

rollButton.addEventListener('click', rollAllDice)
rollButton.addEventListener('click', handleButtonClick)

newGame.addEventListener('click', resetGame)

function resetGame() {
    document.getElementById('rollButton').disabled = false;
    let clearImages = document.querySelectorAll(".diceDisplay img")
    for (let index = 0; index < clearImages.length; index++) {
        clearImages[index].remove();
    }
    clearImages = document.querySelectorAll(".keptDice img")
    for (let index = 0; index < clearImages.length; index++) {
        clearImages[index].remove();
    }
    clickCount = 0;
    diceArray.length = 5;
    winningArray = []
    needSix = true;
    needFive = true;
    needFour = true;
    needDoubles = true;
    canRoll = true;
    return clickCount;
}

let clickCount = 0;
let maxClicks = 3;

function handleButtonClick() {
    clickCount++;
    if (clickCount > maxClicks) {
        // Disable the button
        document.getElementById('rollButton').disabled = true;
        // message pop up
        alert("No more rolls left!");
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

        diceArray.pop(); //reduces the number of rollable dice by one

    }

    let grabFive = rolledArray.find(num => num == 5);
    if (grabFive && needFive && !needSix) {
        let winningDisplay = document.createElement("img");
        winningDisplay.src = "./media/five.png"
        let winRow = document.querySelector(".keptDice");
        winRow.append(winningDisplay);
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
        winRow.append(winningDisplay);
        needFour = false;
        let index4 = rolledArray.indexOf(4);
        if (index4 > -1) {
            rolledArray.splice(index4, 1);
        }
        diceArray.pop();

    }

    if (!needFour && !needFive && !needSix) {

        if (rolledArray[0] === rolledArray[1]) {

            clearImages = document.querySelectorAll(".diceDisplay img")
            for (let index = 0; index < clearImages.length; index++) {
                clearImages[index].remove();

            }
            displayDiceGraphic(rolledArray[0])
            displayDiceGraphic(rolledArray[1])

            let winTextDisplay = document.createElement("p");
            winTextDisplay = "FREE DRINK"
            let wOrLDisplay = document.querySelector(".winOrLose");
            wOrLDisplay.append(winTextDisplay);
            document.getElementById('rollButton').disabled = true;

            console.log("you win")
            needDoubles = false;
            canRoll = false;

        }
    }

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

