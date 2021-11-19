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


// Initialize variables to track wins for each round
let playerWins = 0;
let computerWins = 0;

// Create a function called playRound to play a single round
function playRound() {
    
    // Create variables to store each hand
    let playerSelection = prompt("Enter your choice: ").toLowerCase();
    let computerSelection = computerPlay();
    

    console.log("Player: ", playerSelection);
    console.log("Computer: ", computerSelection);

    // Create if statements for all the hand scenarios

    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
        console.log("ComputerWins: ", computerWins);
        console.log("PlayerWins: ", playerWins);
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            console.log("You lose! Paper eats rock");
            computerWins++;
            console.log("ComputerWins: ", computerWins);
            console.log("PlayerWins: ", playerWins);
        }
        else if (computerSelection == "scissors") {
            console.log("You win! Rock beats scissors");
            playerWins++;
            console.log("ComputerWins: ", computerWins);
            console.log("PlayerWins: ", playerWins);
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("You win! Paper eats rock");
            playerWins++;
            console.log("ComputerWins: ", computerWins);
            console.log("PlayerWins: ", playerWins);
        }
        else if (computerSelection == "scissors") {
            console.log("You lose! Scissors cuts paper");
            computerWins++;
            console.log("ComputerWins: ", computerWins);
            console.log("PlayerWins: ", playerWins);

        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            console.log("You win! Scissors cuts paper");
            playerWins++;
            console.log("ComputerWins: ", computerWins);
            console.log("PlayerWins: ", playerWins);
        }
        else if (computerSelection == "rock") {
            console.log("You lose! Rock beats scissors");
            computerWins++;
            console.log("ComputerWins: ", computerWins);
            console.log("PlayerWins: ", playerWins);
        }
    }
}

function game() {

     // Iterate through 5 rounds in a loop and store scores, calling the playRound function
     for (let i = 1; i <= 5; i++) {
        console.log("Round: ", i)
        playRound();
     }
    // Call winner function inside the game function. 
     winner();

     // Compare tallies and deliver a winner
    function winner() {
        if (playerWins > computerWins) {
            console.log("You win the series!");
        }
        else if (playerWins == computerWins) {
            console.log("Tie series!");
        }
        else {
            console.log("Sorry you lost the series");
        }
    }
 }
game();
