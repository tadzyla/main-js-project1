
function computerPlay() {
    
    let computerHandPick = Math.floor(Math.random() * 3);

    if ( computerHandPick === 0 ) {
        computerHandPick = "rock";
    } 
    else if ( computerHandPick === 1 ) {
        computerHandPick = "paper";
    } 
    else {
        computerHandPick = "scissors";
    }

    console.log(`Computer picked: ${computerHandPick}`);
    return computerHandPick;
}


function playRound(playerSelection, computerSelection) {

    let result = "You lose! Scissors beats Paper";

    if ( computerSelection === playerSelection ) {
        result = "Try again";
    }
    else if ( computerSelection === "rock" && playerSelection === "paper" ) {
        result = "You win! Paper beats Rock";
    }
    else if ( computerSelection === "rock" && playerSelection === "scissors" ) {
        result = "You lose! Rock beats Scissors";
    }
    else if ( computerSelection === "paper" && playerSelection === "rock" ) {
        result = "You lose! Paper beats Rock";
    }
    else if ( computerSelection === "paper" && playerSelection === "scissors" ){
        result = "You win! Scissors beats Paper";
    }
    else {
        result = "You win! Rock beats Scissors";
    }

    console.log(result);
    return result;
}

// const playerSelection = window.prompt("Type your hand").toLowerCase();

function game(playerSelection) {
    for( let i = 0; i < 5; i++ ) {
        console.log(`Player picked: ${playerSelection}`);
        playRound(playerSelection, computerPlay());
    }
}

game(window.prompt("Type your hand").toLowerCase());