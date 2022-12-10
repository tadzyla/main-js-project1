
const userHand = document.getElementById("user_hand")
const elfHand = document.getElementById("elf_hand")
const handButtons = document.querySelectorAll(".hand_buttons")
const playerMessage = document.getElementById("user_message")

handButtons.forEach(button => {
    button.addEventListener("click", game)
})

function game(playerHand) {
    const computerHand = computerPlay()
    elfHand.src = `/photos/${computerHand}.png`
    userHand.src = `/photos/${playerHand.target.value}.png`
    playerMessage.textContent = getMessage(computerHand, playerHand.target.value)
}

function getMessage(computerHand, playerHand) {

    if (playerHand === computerHand){ 
        return "It's a draw!" 
    }
    if ((playerHand === "Rock" && computerHand === "Paper") || 
        (playerHand === "Paper" && computerHand === "Scissors") || 
        (playerHand === "Scissors" && computerHand === "Rock")){
        return "Elf won!"
    }
        return "You won!"
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