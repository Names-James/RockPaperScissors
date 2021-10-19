//target the individual displays and inputs
const playerDisplay = document.querySelector(".playerDisplay");
const computerDisplay = document.queryCommandValue(".computerDisplay");
const resultDisplay = document.querySelector(".resultDisplay");
const pScore = document.querySelector(".pScoreDisplay");
const dScore = document.querySelector(".drawDisplay");
const cScore = document.querySelector(".cScoreDisplay");
const rDisplay = document.querySelector(".roundDisplay");
const inputText = document.querySelector(".inputText");
const bOne = document.querySelector(".bOne");
const bTwo = document.querySelector(".bTwo");
const bThree = document.querySelector(".bThree");

//asks how many rounds the player would like to play
function start() {
//initiate inputs to take number of rounds
inputText.textContent = 'How many rounds should you play?';

bOne.onclick = () => game(1);
bTwo.onclick = () => game(3);
bThree.onclick = () => game(5);
};

//lanches the game 
function game(numGames) {

    //changes input display
    inputText.textContent = 'Pick your weapon!';
    document.getElementById("btnOne").src="rock.png";
    document.getElementById("btnTwo").src="paper.png";
    document.getElementById("btnThree").src="scissors.png";
    document.getElementById("pCImg").src="blank.png";
    document.getElementById("cCImg").src="blank.png";

    //declares scoring variables
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;
    let rCount = 1;

    //changes score display
    resultDisplay.textContent = ' ';
    pScore.textContent = playerScore;
    dScore.textContent = drawScore;
    cScore.textContent = computerScore;
    rDisplay.textContent = `Round ${rCount} / ${numGames}`;


    
    //declares buttons
     bOne.onclick = () => {
        document.getElementById("pCImg").src="rock.png";
         round(0, cChoice());
         check();
    };
    bTwo.onclick = () => {
        document.getElementById("pCImg").src="paper.png";
        round(1, cChoice());
        check();
    };
    bThree.onclick = () => {
        document.getElementById("pCImg").src="scissors.png";
        round(2, cChoice());
        check();
    };


     //ends the game when the round count passes the chosen number of rounds
     function check() {
        if (rCount  > numGames) {
            if (playerScore > computerScore) {
                rDisplay.textContent = `Round ${numGames} / ${numGames}`;
                resultDisplay.textContent = `You win the game!! Thank goodness, you'll live to see another day!`;
                reset();
            } else if (playerScore < computerScore) {
                rDisplay.textContent = `Round ${numGames} / ${numGames}`;
                resultDisplay.textContent = `Oh no!! Your opponent wins, you better start running!`;
                reset();
            } else {
                rDisplay.textContent = `Round ${numGames} / ${numGames}`;
                resultDisplay.textContent = `It's a wash!! Maybe you're safe?`;
                reset();
            };
        };
    };



    //takes player input and decides who wins
    function round(playerChoice, computerChoice) {
        
        //decides who wins
        if ((playerChoice == 0 && computerChoice == 2) || (playerChoice == 1 && computerChoice == 0) || (playerChoice == 2 && computerChoice == 1)) {
            playerScore += 1;
            resultDisplay.textContent = `You win this round!`;
        } else if ((playerChoice == 0 && computerChoice == 1) || (playerChoice == 1 && computerChoice == 2) || (playerChoice == 2 && computerChoice == 0)) {
            computerScore += 1;
            resultDisplay.textContent = `Your opponent wins this round!`;
        } else {
            drawScore += 1;
            resultDisplay.textContent = `It's a Draw!`;
        };
        //incraments round
        rCount += 1;
        //updates score display after round
        pScore.textContent = playerScore;
        dScore.textContent = drawScore;
        cScore.textContent = computerScore;
        rDisplay.textContent = `Round ${rCount} / ${numGames}`;   
    };

    //returns computer's choice
    function cChoice() {
        let computerChoice = Math.floor(Math.random()*4);
        switch (computerChoice) {
            case 0:
                document.getElementById("cCImg").src="rock.png";
                return computerChoice;
            case 1:
                document.getElementById("cCImg").src="paper.png";
                return computerChoice;
            case 2:
                document.getElementById("cCImg").src="scissors.png";
                return computerChoice;
    };
    };

    //resets inputs to round selection
    function reset() {
        inputText.textContent = 'How many rounds should you play?';
        document.getElementById("btnOne").src="one.png";
        document.getElementById("btnTwo").src="three.png";
        document.getElementById("btnThree").src="five.png";
    
        
        
        bOne.onclick = () => game(1);
        bTwo.onclick = () => game(3);
        bThree.onclick = () => game(5);
    }

};

start();

