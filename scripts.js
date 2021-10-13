//initializes game
function start() {
    let numGames = parseInt(prompt('How many games would you like to play'));
    if (isNaN(numGames)) {
        alert('You must enter a number!');
        start();
    } else game(numGames);

   reset();
};

//Game takes # of games input,
//changes inputs, and loops for chosen amount of rounds,
//keeps track of the winners, declares ultimate winner,
//closes by changing button inputs back.
function game (numGames) {
    let playerScore = 0;
    let computerScore = 0;
    let draw = 0;

    for (i= 1; i <= numGames; i++) {
        switch (round(playersChoice(), computerChoice())) {
            case 'draw':
                draw += 1;
                break;
            case 'player':
                playerScore += 1;
                break;
            case 'computer':
                computerScore += 1;
                break;
        };
    };

    if (playerScore > computerScore) {
        alert(`The Player Wins!
        Final Score: (${numGames})
        Player - ${playerScore} 
        Computer - ${computerScore} 
        Draw - ${draw}`);
    } else if (playerScore < computerScore) {
        alert(`The Computer Wins!
        Final Score: (${numGames})
        Player - ${playerScore} 
        Computer - ${computerScore} 
        Draw - ${draw}`);
    } else {
        alert(`It's a Draw!
        Final Score: (${numGames})
        Player - ${playerScore} 
        Computer - ${computerScore} 
        Draw - ${draw}`);
    }
    
};

//Round takes player input and computerChoices function,
//and declares a winner.
function round(pChoice, cChoice) {
    if ((pChoice === 'R' && cChoice === 'S') || (pChoice === 'S' && cChoice === 'P') || (pChoice === 'P' && cChoice === 'R')) {
            alert(`You Win!
            Player - ${pChoice}
            Computer - ${cChoice}!`);
            return 'player';
    } else if ((pChoice === 'S' && cChoice === 'R') || (pChoice === 'P' && cChoice === 'S') || (pChoice === 'R' && cChoice === 'P')) {
            alert(`You Lose!
            Player - ${pChoice} 
            Computer - ${cChoice}!`);
            return 'computer';
    } else { alert(`Draw! 
            Player - ${pChoice} 
            Computer - ${cChoice}`);
            return 'draw';  
    };
};

//playersChoice
function playersChoice() {
    let choice = prompt('[R]ock, [P]aper, or [S]cissors?');
    let pChoice = choice.toUpperCase();
    if (pChoice === 'R'|| pChoice === 'S'  || pChoice === 'P') {
            return pChoice;
    } else {
        alert('You must enter the letter R, P, or S.');
        playersChoice();
    };
};

//Outputs a random computer choice for Rock, Paper, or Scissors.
function computerChoice() {
    let theRandomNumber = Math.floor(Math.random() * 3);
    switch (theRandomNumber) {
        case 0:
            return 'R';
        case 1:
            return 'P';
        case 2:
            return 'S';
    };
};

//reset function
function reset() {
    if (confirm('Do you want to play more games?')) start();
    else alert('Thank you for playing!');
}

start();