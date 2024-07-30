// Steps
let humanScore = 0;
let computerScore = 0;
playGame();

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

function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        console.log(`Tie! Both are ${humanChoice}`);
        return;
    }
    if (isWinner(computerChoice, humanChoice)) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }    
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

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    printResult(computerScore, humanScore);
}

function printResult(computerScore, humanScore) {
    if (computerScore < humanScore) {
        console.log("You win!");
    }
    else if (computerScore > humanScore) {
        console.log("You lose!");
    } else {
        console.log("Tie!");
    }
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}