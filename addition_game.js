let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let a = document.getElementById("firstNumber").textContent = Math.ceil(Math.random() * 50);
let b = document.getElementById("secondNumber").textContent = Math.ceil(Math.random() * 100);
let sum = a + b;


function Checkbutton() {
    if (sum === parseInt(userInput.value)) {
        gameResult.textContent = "Congratulations! You got it right";
        gameResult.style.backgroundColor = "#028a0f";
    } else {
        gameResult.textContent = "Please Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
        
    }
}

function Restartbutton() {
    gameResult.textContent = "";
    userInput.value = "";
    let a = document.getElementById("firstNumber").textContent = Math.ceil(Math.random() * 50);
    let b = document.getElementById("secondNumber").textContent = Math.ceil(Math.random() * 100);
    sum = a + b;
}