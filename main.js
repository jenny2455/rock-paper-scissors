// Initialize global variables
let playerWins = 0;
let computerWins = 0;
let round = 1;

window.addEventListener('click', playRound);
    
// Create a function called playRound to play a single round
function playRound(e) {
    
    let playerSelection = document.querySelector(`button[id="${e.target.id}"]`).id;
    let computerSelection = computerPlay();

    const container = document.querySelector('#container');
    const playerImage = document.querySelector('#player');
    const computerImage = document.querySelector('#computer');
    const div = document.createElement('div');
    const playerScore = document.createElement('div');
    const computerScore = document.createElement('div');
    const roundNumber = document.createElement('div');
    
    // Clear container of images and text on every click
    container.textContent = " ";
    if (playerImage.hasChildNodes()) {
        playerImage.removeChild(playerImage.firstChild);
    }
    if (computerImage.hasChildNodes()) {
        computerImage.removeChild(computerImage.firstChild);
    }

    // Display the round
    roundNumber.textContent = `Round ${round}.`;
    container.appendChild(roundNumber);

    
    // Create if statement for images for player

    if (playerSelection == "rock") {
        const image = document.createElement('img');
        image.src = 'images/rock.jpeg';
        playerImage.appendChild(image);
    }
    else if (playerSelection == "paper") {
        const image = document.createElement('img');
        image.src = 'images/paper.jpeg';
        playerImage.appendChild(image);
    }
    else if (playerSelection == "scissors") {
        const image = document.createElement('img');
        image.src = 'images/scissor.jpg';
        playerImage.appendChild(image);
    }

    //Create if statements for computer's selection
    if (computerSelection == "rock") {
        const image = document.createElement('img');
        image.src = 'images/rock.jpeg';
        computerImage.appendChild(image);
    }
    else if (computerSelection == "paper") {
        const image = document.createElement('img');
        image.src = 'images/paper.jpeg';
        computerImage.appendChild(image);
    }
    else if (computerSelection == "scissors") {
        const image = document.createElement('img');
        image.src = 'images/scissor.jpg';
        computerImage.appendChild(image);
    }



    // Create if statements for all the hand scenarios

    if (playerSelection == computerSelection) {
        div.textContent = "It's a tie!";
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            div.textContent = "You lose! Paper eats rock.";
            computerWins++;
        }
        else if (computerSelection == "scissors") {
            div.textContent = "You win! Rock smashes scissors.";
            playerWins++;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            div.textContent = "You win! Paper eats rock.";
            playerWins++;
        }
        else if (computerSelection == "scissors") {
            div.textContent = "You lose! Scissors cuts paper.";
            computerWins++;
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            div.textContent = "You win! Scissors cuts paper.";
            playerWins++;
        }
        else if (computerSelection == "rock") {
            div.textContent = "You lose! Rock smashes scissors.";
            computerWins++;
        }
    }

    container.appendChild(div);
    round++;

    playerScore.textContent = `Player's Score: ${playerWins}`;
    computerScore.textContent = `Computer's Score: ${computerWins}`;
    container.appendChild(playerScore);
    container.appendChild(computerScore);

    winner();
};

// Check for a winner
function winner() {

    const winner = document.querySelector('#winner');
    const winnerGame = document.createElement('div');

    if (playerWins == 5) {
         winnerGame.textContent = "Yay! You win!";
         winner.appendChild(winnerGame);
        window.removeEventListener('click', playRound);
    }
    else if (computerWins == 5) {
        winnerGame.textContent = "FATALITY. YOU LOSE.";
        winner.appendChild(winnerGame);
        window.removeEventListener('click', playRound);
    }

    
};


// Create a function that randomize's the computer's selection
function computerPlay() {
    // Create an array to hold the 3 options
    let choices = ["rock", "paper", "scissors"];

    // Create a variable to hold the random number assignment
    let randomNum = Math.floor(Math.random() * choices.length);

    // Return the index of the random number
    let computerResponse = choices[randomNum];
    return computerResponse;
}
