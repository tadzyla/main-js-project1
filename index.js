
const userHand = document.getElementById("user_hand")
const elfHand = document.getElementById("elf_hand")
const handButtons = document.querySelectorAll(".hand_buttons")
const playerMessage = document.getElementById("user_message")

handButtons.forEach(button => {
    button.addEventListener("click", game)
})

function game(playerHand) {
    const computerHand = computerPlay()

    if (playerHand.target.value === "Rock" && computerHand === "Rock"){
        elfHand.src = "/photos/rock.png"
        userHand.src = "/photos/rock.png"
        playerMessage.textContent = "It's draw!"

    } else if (playerHand.target.value === "Paper" && computerHand === "Paper") {
        elfHand.src = "/photos/paper.png"
        userHand.src = "/photos/paper.png"
        playerMessage.textContent = "It's draw!"
    
    } else if (playerHand.target.value === "Scissors" && computerHand === "Scissors") {
        elfHand.src = "/photos/scissors.png"
        userHand.src = "/photos/scissors.png"
        playerMessage.textContent = "It's draw!"
    
    } else if (playerHand.target.value === "Rock" && computerHand === "Paper") {
        elfHand.src = "/photos/paper.png"
        userHand.src = "/photos/rock.png"
        playerMessage.textContent = "You loose against Elf"

    } else if (playerHand.target.value === "Paper" && computerHand === "Scissors") {
        elfHand.src = "/photos/scissors.png"
        userHand.src = "/photos/paper.png"
        playerMessage.textContent = "You loose against Elf"

    } else if (playerHand.target.value === "Scissors" && computerHand === "Paper") {
        elfHand.src = "/photos/paper.png"
        userHand.src = "/photos/scissors.png"
        playerMessage.textContent = "You win against Elf"

    } else {
        elfHand.src = "/photos/scissors.png"
        userHand.src = "/photos/rock.png"
        playerMessage.textContent = "You win against Elf"
    }
}

function computerPlay() {
    let computerHandPick = Math.floor(Math.random() * 3)

    if (computerHandPick === 0) {
        computerHandPick = "Rock"
    } 
    else if (computerHandPick === 1) {
        computerHandPick = "Paper"
    } 
    else {
        computerHandPick = "Scissors"
    }
    return computerHandPick
}