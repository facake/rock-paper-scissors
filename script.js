// Steps
// const buttons = document.querySelectorAll("button");
// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         playRound(getComputerChoice(), button.textContent);
//     });
// });

// const btn = document.querySelector("button");
// btn.addEventListener("click", () => playRound(getComputerChoice(), btn.textContent));

let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => 
    btn.addEventListener("click", () => {
        playRound(getComputerChoice(), btn.textContent);
        checkGameOver();
    }));

function getComputerChoice() {
    let rand = Math.random();
    if (rand >= 2 / 3) {
        return "rock";
    }
    if (rand >= 1 / 3) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    let choice;
    while (true) {
        choice = prompt("rock, paper or scissors?").toLocaleLowerCase();
        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            return choice;
        }
    }
}

const results = document.querySelector(".results");
function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        addResult(`\nTie! Both are ${humanChoice}\n`);
    }
    else if (isWinner(computerChoice, humanChoice)) {
        humanScore++;
        addResult(`You win! ${humanChoice} beats ${computerChoice}\n`);
    } else {
        computerScore++;
        addResult(`You lose! ${computerChoice} beats ${humanChoice}\n`);
    }    
}

function addResult(result) {
    const res = document.createElement("p");
    res.textContent = result;
    results.appendChild(res);
}

function isWinner(computerChoice, humanChoice) {
    if (computerChoice == "rock") {
        return humanChoice == "paper";
    } else if (computerChoice == "paper") {
        return humanChoice == "scissors";
    } else {
        return humanChoice == "rock";
    }
}

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         playRound(getComputerChoice(), getHumanChoice());
//     }
//     printResult(computerScore, humanScore);
// }

function checkGameOver() {
    if (humanScore != 5 && computerScore != 5) {
        return;
    }
    if (humanScore == 5) {
        addResult("You win!")
    } else if (computerScore == 5) {
        addResult("You lose!")
    }
    addResult(`Human score: ${humanScore}`);
    addResult(`Computer score: ${computerScore}`);
    computerScore = 0;
    humanScore = 0;
}
