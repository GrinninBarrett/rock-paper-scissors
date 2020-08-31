let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let gameEnded = false;

const description = document.querySelector("#description");
const start = document.querySelector("#start");
const end = document.querySelector("#end");
const status = document.querySelector("#status");
const score = document.querySelector("#score");
const scoreboard = document.querySelector("#scoreboard");
const playerPoints = document.querySelector("#player-points");
const computerPoints = document.querySelector("#computer-points");
const choices = document.querySelector("#choice-buttons");

start.addEventListener("click", () => {
    start.style.display = "none";
    end.style.display = "block";
    choices.style.display = "block";
    description.textContent = "What's your pick? Rock, Paper, or Scissors?";
    status.textContent = "Let's get started. First to 5!";
    score.textContent = "Current score:";
    scoreboard.style.display = "flex";
    playerPoints.textContent = `Player: ${playerScore}`;
    computerPoints.textContent = `Computer: ${computerScore}`;
    gameEnded = false;
});

end.addEventListener("click", () => {
    if (!gameEnded) {
        start.style.display = "block";
        end.style.display = "none";
        end.textContent = "Click here to end the game";
        choices.style.display = "none";
        status.textContent = "Game over!";
        score.textContent = "";
        scoreboard.style.display = "none";
        playerPoints.textContent = "";
        computerPoints.textContent = "";
        start.textContent = "Click here to play again!";
        description.textContent = "Can you beat the computer at this classic game?";
        playerScore = 0;
        computerScore = 0;
        roundCount = 0;
    } else {
        start.style.display = "block";
        end.style.display = "none";
        end.textContent = "Click here to end the game";
        choices.style.display = "none";
        status.textContent = "";
        score.textContent = "";
        scoreboard.style.display = "none";
        playerScore = 0;
        computerScore = 0;
        roundCount = 0;
        gameEnded = false;
    }
});

let playerSelection;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
        playerSelection = rock.textContent;
        playRound();
});
paper.addEventListener("click", () => {
        playerSelection = paper.textContent;
        playRound();
});
scissors.addEventListener("click", () => {
        playerSelection = scissors.textContent;
        playRound();
    });

function playRound() {
    let bestScore;

    function computerPlay() {
        let arr = ["Rock", "Paper", "Scissors"];
        let compChoice = arr[Math.floor(Math.random() * arr.length)];
        return compChoice;
    }

    let computerSelection = computerPlay();            

    if (playerSelection === computerSelection) {
        status.textContent = "Try again... You both chose " + playerSelection + "!";
    } else {
        if (playerSelection === "Rock") {
            if (computerSelection === "Scissors") {
                status.textContent = "You won that round! Rock beats Scissors!";
                playerScore++;
                roundCount++;
            } else if (computerSelection === "Paper") {
                status.textContent = "You lost that round! Paper beats Rock!";
                computerScore++;
                roundCount++;
            }
        } else if (playerSelection === "Paper") {
            if (computerSelection === "Rock") {
                status.textContent = "You won that round! Paper beats Rock!";
                playerScore++;
                roundCount++;
            } else if (computerSelection === "Scissors") {
                status.textContent = "You lost that round! Scissors beats Paper!";
                computerScore++;
                roundCount++;
            }
        } else if (playerSelection === "Scissors") {
            if (computerSelection === "Rock") {
                status.textContent = "You lost that round! Rock beats Scissors!";
                computerScore++;
                roundCount++;
            } else if (computerSelection === "Paper") {
                status.textContent = "You won that round! Scissors beats Paper!";
                playerScore++;
                roundCount++;
            }
        }
    }

    playerPoints.textContent = `Player: ${playerScore}`;
    computerPoints.textContent = `Computer: ${computerScore}`;

    if (playerScore === computerScore) {
        bestScore = playerScore;
    } else {
        bestScore = computerScore;
    }

    if (bestScore === 5){
        gameEnded = true;
        let winner;
        let highScore;
        let lowScore;
        if (playerScore > computerScore) {
            winner = "Player";
            highScore = playerScore;
            lowScore = computerScore;
        } else if (computerScore > playerScore) {
            winner = "Computer";
            highScore = computerScore;
            lowScore = playerScore;
        } else {
            alert("Something crazy happened and I have no idea who won!");
        }
        choices.style.display = "none";
        score.textContent = `${winner} wins the game!`;
        end.textContent = "Click here to play again!";
    }
}


// function game() {

//     gameInProgress = true;
//     choices.style.display = flex;
//     while (roundCount < 5) {
//         playRound();
//         let gameOver = false;
//     }
//     if (playerScore > computerScore) {
//         alert("Player wins! The score was " + playerScore + " - " +
//           computerScore + ".");
//     } else if (computerScore > playerScore) {
//         alert("Computer wins! The score was " + computerScore + " - " +
//           playerScore + ".");
//     } else {
//         alert("Something crazy happened and I have no idea who won!");
//     }
//     gameOver = true;
    
//     if (gameOver) {
//         playerScore = 0;
//         computerScore = 0;
//         roundCount = 0;
//     }
// }