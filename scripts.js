//playersChoice
function playersChoice() {
    let choice = prompt('[R]ock, [P]aper, or [S]cissors?');
    let pChoice = choice.toUpperCase();
    if (pChoice == 'R' || pChoice == 'P' || pChoice == 'S') {
        return pChoice;
    } else { alert('You must enter the letter R, P, or S.');
        playersChoice();
    };
};

//Outputs a random computer choice for Rock, Paper, or Scissors.
function computerChoice() {
    let theRandomNumber = Math.floor(Math.random() * 2);
    switch (theRandomNumber) {
        case 0:
            return 'R';
        case 1:
            return 'P';
        case 2:
            return 'S';
    };
};

//Game takes # of games input,
//changes inputs, and loops for chosen amount of rounds,
//keeps track of the winners, declares ultimate winner,
//closes by changing button inputs back.
function game (numGames) {
    let playerScore = 0;
    let computerScore = 0;
    let draw = 0;

    for (i= 0; i < numGames; i++) {
        switch (round(playersChoice(), computerChoice())) {
            case 'draw':
                return draw =+ 1;
            case 'player':
                return playerScore =+ 1;
            case 'computer':
                return computerScore =+ 1;
        };
    };

    if (playerScore > computerScore) {
        alert(`The Player Wins!
        Current Score: Player - ${playerScore} Computer - ${computerScore} Draw - ${draw}`);
    } else if (playerScore < computerScore) {
        alert(`The Computer Wins!
        Current Score: Player - ${playerScore} Computer - ${computerScore} Draw - ${draw}`);
    } else {
        alert(`It's a Draw!
        Current Score: Player - ${playerScore} Computer - ${computerScore} Draw - ${draw}`);
    }
    
};

//Round takes player input and computerChoices function,
//and declares a winner.
function round(pChoice, cChoice) {
    switch (pChoice != cChoice) {
        case (pChoice == 'R' && cChoice == 'S') || (pChoice == 'S' && cChoice == 'P') || (pChoice == 'P' && cChoice == 'R'):
            alert(`You chose ${pChoice} and the computer chose ${cChoice}! You win!`);
            return 'player';
        case (pChoice == 'S' && cChoice == 'R') || (pChoice == 'P' && cChoice == 'S') || (pChoice == 'R' && cChoice == 'P'):
            alert(`You chose ${pChoice} and the computer chose ${cChoice}! The computer wins!`);
            return 'computer';
    };
    alert(`Draw! Player - ${pChoice} Computer - ${cChoice}`);
    return 'draw';
};

let numGames = parseInt(prompt('How many games would you like to play'));
game(numGames);