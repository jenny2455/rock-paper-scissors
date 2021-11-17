// Create a function called computerPlay
function computerPlay() {
    // Create an array to hold the 3 options
    let choices = ["rock", "paper", "scissors"];

    // Create a variable to hold the random number assignment
    let randomNum = Math.floor(Math.random() * choices.length);

    // Return the index of the random number
    let computerResponse = choices[randomNum];
    return computerResponse;
    }

// computerPlay();
// console.log(computerPlay());


// Create a function called playRound
function playRound(playerSelection, computerSelection) {
    
    // put playerSelection in lowercase
    let playerChoice = playerSelection.toLowerCase();

    switch (true) {
        case (playerChoice == "paper" && computerSelection == "rock"):
            return "You win! Paper beats Rock";
            break;
        
        case (playerChoice == "scissors" && computerSelection == "paper"):
            return "You win! Scissors beats Paper";
            break;
        
        case (playerChoice == "rock" && computerSelection == "scissors"):
            return "You win! Rock beats Scissors";
            break;
        
        case (playerChoice == "rock" && computerSelection == "paper"):
            return "You lose! Paper beats Rock";
            break;
        
        case (playerChoice == "paper" && computerSelection == "scissors"):
            return "You lose! Scissors beats Paper";
            break;
        
        case (playerChoice == "scissors" && computerSelection == "rock"):
            return "You lose! Rock beats Scissors";
            break;
        
        default:
            return "It's a tie!";

    }
}

const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


function game() {
    // Create counters to store each round's winner and initialize to 0
    let playerWins = 0;
    let computerWins = 0;

    // Loop through the rounds and store a winner for each round
    for (let i = 1; i <= 5; i++) {
        playRound(i);
        
        i++;
    }

}
