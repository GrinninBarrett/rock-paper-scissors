let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let gameEnded = false;

const description = document.querySelector("#description");
const start = document.querySelector("#start");
const end = document.querySelector("#end");
const status = document.querySelector("#status");
const score = document.querySelector("#score");
const choices = document.querySelector("#choice-buttons");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

start.addEventListener("click", () => {
    start.style.display = "none";
    end.style.display = "block";
    choices.style.display = "block";
    description.textContent = "What's your pick? Rock, Paper, or Scissors?";
    status.textContent = " ";
    score.textContent = " ";
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
        start.textContent = "Click here to play again!";
        description.textContent = "Can you beat the computer at this classic game?";
        playerScore = 0;
        computerScore = 0;
        roundCount = 0;
    } else {
        end.textContent = "Click here to end the game";
        status.textContent = "";
        score.textContent = "";
        playerScore = 0;
        computerScore = 0;
        roundCount = 0;
        gameEnded = false;
    }
});

let playerSelection;

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
    if (roundCount < 5) {
        actuallyPlay();
        function actuallyPlay() {

            function computerPlay() {
                let arr = ["Rock", "Paper", "Scissors"];
                let compChoice = arr[Math.floor(Math.random() * arr.length)];
                return compChoice;
            }

            let computerSelection = computerPlay();            

            if (playerSelection === computerSelection) {
                status.textContent = "Try again... You both chose " + playerSelection + "!";
                score.textContent = `Current score: ${playerScore} - ${computerScore}`;
                return;
            } else {
                if (playerSelection === "Rock") {
                    if (computerSelection === "Scissors") {
                        status.textContent = "You won that round! Rock beats Scissors!";
                        playerScore++;
                        roundCount++;
                        score.textContent = `Current score: ${playerScore} - ${computerScore}`;
                        return;
                    } else if (computerSelection === "Paper") {
                        status.textContent = "You lost that round! Paper beats Rock!";
                        computerScore++;
                        roundCount++;
                        score.textContent = `Current score: ${playerScore} - ${computerScore}`;
                        return;
                    }
                } else if (playerSelection === "Paper") {
                    if (computerSelection === "Rock") {
                        status.textContent = "You won that round! Paper beats Rock!";
                        playerScore++;
                        roundCount++;
                        score.textContent = `Current score: ${playerScore} - ${computerScore}`;
                        return;
                    } else if (computerSelection === "Scissors") {
                        status.textContent = "You lost that round! Scissors beats Paper!";
                        computerScore++;
                        roundCount++;
                        score.textContent = `Current score: ${playerScore} - ${computerScore}`;
                        return;
                    }
                } else if (playerSelection === "Scissors") {
                    if (computerSelection === "Rock") {
                        status.textContent = "You lost that round! Rock beats Scissors!";
                        computerScore++;
                        roundCount++;
                        score.textContent = `Current score: ${playerScore} - ${computerScore}`;
                        return;
                    } else if (computerSelection === "Paper") {
                        status.textContent = "You won that round! Scissors beats Paper!";
                        playerScore++;
                        roundCount++;
                        score.textContent = `Current score: ${playerScore} - ${computerScore}`;
                        return;
                    }
                }
            }
        } 
    }
    if (roundCount === 5){
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
        score.textContent = `${winner} wins the game! The score was ${highScore} - ${lowScore}.`;
        end.textContent = "Click here to play again!";
    }
}


function game() {

    gameInProgress = true;
    choices.style.display = flex;
    while (roundCount < 5) {
        playRound();
        let gameOver = false;
    }
    if (playerScore > computerScore) {
        alert("Player wins! The score was " + playerScore + " - " +
          computerScore + ".");
    } else if (computerScore > playerScore) {
        alert("Computer wins! The score was " + computerScore + " - " +
          playerScore + ".");
    } else {
        alert("Something crazy happened and I have no idea who won!");
    }
    gameOver = true;
    
    if (gameOver) {
        playerScore = 0;
        computerScore = 0;
        roundCount = 0;
    }
}