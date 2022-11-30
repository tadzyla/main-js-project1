
function computerPlay() {
    
    let computerHandPick = Math.floor(Math.random() * 3);

    if (computerHandPick === 0) {
        computerHandPick = "rock";
    } 
    else if (computerHandPick === 1) {
        computerHandPick = "paper";
    } 
    else {
        computerHandPick = "scissors";
    }

    return computerHandPick;
}


function playRound(playerSelection, computerSelection) {

    let result = "You lose! Scissors beats Paper";

    if (computerSelection === playerSelection) {
        result = "Try again";
    }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        result = "You win! Paper beats Rock";
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        result = "You lose! Rock beats Scissors";
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        result = "You lose! Paper beats Rock";
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        result = "You win! Scissors beats Paper";
    }
    else {
        result = "You win! Rock beats Scissors";
    }

    return result;
}


function game() {

    const playerSelection = window.prompt("Type your hand here ('paper', 'scissors' or 'rock')", "paper").toLowerCase();

    for (let i = 0; i < 5; i++) {
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            console.log(`Player picked: ${playerSelection}`);
            let computerSelection = computerPlay();
            console.log(`Computer picked: ${computerSelection}`);
            console.log(playRound(playerSelection, computerSelection));
        } else {
            alert("Choose the right hand");
            location.reload();
            break;
        }
    }
}

game();