const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const results = document.querySelector('#results');
const runningScore = document.querySelector('#runningScore');
const finalResult = document.querySelector('#finalResult');

let playerPoints = 0;
let computerPoints = 0;

runningScore.textContent = playerPoints + " - " + computerPoints;

rock.addEventListener('click', ()=>{
    finalResult.textContent = "";
    computerChoice = computerPlay();
    singleRound(rock.id, computerChoice);
});

paper.addEventListener('click', ()=>{
    finalResult.textContent = "";
    computerChoice = computerPlay();
    singleRound(paper.id, computerChoice);
});

scissors.addEventListener('click', ()=>{
    finalResult.textContent = "";
    computerChoice = computerPlay();
    singleRound(scissors.id, computerChoice);
});


function computerPlay(){
    let randomValue = Math.floor((Math.random() * 3) + 1);

    if (randomValue == 1){
        return 'Rock';
    }
    else if (randomValue == 2){
        return 'Paper';
    }
    else if (randomValue == 3){
        return 'Scissors';
    }
}

function singleRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection == "rock" && computerSelection == "Rock"){
        results.textContent = "Tie round!";
    }
    else if (playerSelection == "rock" && computerSelection == "Paper"){
        results.textContent = "You lose! Paper beats rock!";
        computerPoints++;
        runningScore.textContent = playerPoints + " - " + computerPoints;
    }
    else if (playerSelection == "rock" && computerSelection == "Scissors"){
        results.textContent = "You win! Rock beats scissors!";
        playerPoints++;
        runningScore.textContent = playerPoints + " - " + computerPoints;
    }
    else if (playerSelection == "paper" && computerSelection == "Rock"){
        results.textContent = "You win! Paper beats rock!";
        playerPoints++;
        runningScore.textContent = playerPoints + " - " + computerPoints;
    }
    else if (playerSelection == "paper" && computerSelection == "Paper"){
        results.textContent = "Tie round!";
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors"){
        results.textContent = "You lose! Scissors beats paper!";
        computerPoints++;
        runningScore.textContent = playerPoints + " - " + computerPoints;
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock"){
        results.textContent = "You lose! Rock beats scissors!";
        computerPoints++;
        runningScore.textContent = playerPoints + " - " + computerPoints;
    }
    else if (playerSelection == "scissors" && computerSelection == "Paper"){
        results.textContent = "You win! Scissors beats paper!";
        playerPoints++;
        runningScore.textContent = playerPoints + " - " + computerPoints;
    }
    else if (playerSelection == "scissors" && computerSelection == "Scissors"){
        results.textContent = "Tie round!";
    }
    else{
        results.textContent = "Error! Invalid input!";
    }

    if (playerPoints == 5){
        finalResult.textContent = "You won!";
        playerPoints = 0;
        computerPoints = 0;
    }
    else if (computerPoints == 5){
        finalResult.textContent = "You lost! The final score was " + playerPoints + " - " + computerPoints;
        playerPoints = 0;
        computerPoints = 0;
    }
}