
let dice1 = 0;
let rollButton = document.getElementById('rollButton');



/*
THIS ALSO WORKS
rollButton.addEventListener('click', ()=>{
    console.log("good")
    dice1 = Math.floor(Math.random() * 6) + 1;
    console.log(dice1)
})
*/

rollButton.addEventListener('click', rollDice)

function rollDice(){
    console.log("good")
    dice1 = Math.floor(Math.random() * 6) + 1;
    console.log(dice1)
    displayDiceNumber(dice1)
}

//display the number

function displayDiceNumber(input) {
    let roll = "";
    roll = document.createElement("h1");
    roll.innerHTML = input ;
    let currentDiceRoll = document.querySelector(".here");
    currentDiceRoll.append(roll);
}