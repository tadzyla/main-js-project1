
const userHand = document.getElementById("user_hand")
const elfHand = document.getElementById("elf_hand")
const handButtons = document.querySelectorAll(".hand_buttons")
const playerMessage = document.getElementById("user_message")
const myScore = document.getElementById("my_score")
const elfScore = document.getElementById("elf_score")

handButtons.forEach(button => {
    button.addEventListener("click", game)
})

function game(playerHand) {
    const computerHand = computerPlay()
    elfHand.src = `photos/${computerHand}.png`
    userHand.src = `photos/${playerHand.target.value}.png`
    playerMessage.textContent = getMessageAndUpdateScores(computerHand, playerHand.target.value)
    if (playerMessage.textContent === "Elf scored 5 points, you lost!" || playerMessage.textContent === "You scored 5 points, you are winner!") {
        setTimeout(() => {
            location.reload()
        }, 1000, );
    }
}

function getMessageAndUpdateScores(computerHand, playerHand) {

    if (playerHand === computerHand){ 
        return "It's a draw!" 
    }
    if ((playerHand === "Rock" && computerHand === "Paper") || 
        (playerHand === "Paper" && computerHand === "Scissors") || 
        (playerHand === "Scissors" && computerHand === "Rock")){
        elfScore.textContent = Number(elfScore.textContent) + 1
        if (elfScore.textContent < 5) {
            return "Elf won!"
        } else {
            return "Elf scored 5 points, you lost!"
        }
    }
        myScore.textContent = Number(myScore.textContent) + 1

        if (myScore.textContent < 5) {
            return "You won!"
        } else {
            return "You scored 5 points, you are winner!"
        }  
}

function computerPlay() {
    let computerHandPick = Math.floor(Math.random() * 3)

    if (computerHandPick === 0) {
        return "Rock"
    } 
    if (computerHandPick === 1) {
        return"Paper"
    } 
    return "Scissors"
}