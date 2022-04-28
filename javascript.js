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
        //return "tie";
    }
    else if (playerSelection == "rock" && computerSelection == "Paper"){
        results.textContent = "You lose! Paper beats rock!";
        computerPoints++;
        runningScore.textContent = playerPoints + " - " + computerPoints;
        //return "computer win";
    }
    else if (playerSelection == "rock" && computerSelection == "Scissors"){
        results.textContent = "You win! Rock beats scissors!";
        playerPoints++;
        runningScore.textContent = playerPoints + " - " + computerPoints;
        //return "player win";
    }
    else if (playerSelection == "paper" && computerSelection == "Rock"){
        results.textContent = "You win! Paper beats rock!";
        playerPoints++;
        runningScore.textContent = playerPoints + " - " + computerPoints;
        //return "player win";
    }
    else if (playerSelection == "paper" && computerSelection == "Paper"){
        results.textContent = "Tie round!";
        //return "tie";
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors"){
        results.textContent = "You lose! Scissors beats paper!";
        computerPoints++;
        runningScore.textContent = playerPoints + " - " + computerPoints;
        //return "computer win";
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock"){
        results.textContent = "You lose! Rock beats scissors!";
        computerPoints++;
        runningScore.textContent = playerPoints + " - " + computerPoints;
        //return "computer win";
    }
    else if (playerSelection == "scissors" && computerSelection == "Paper"){
        results.textContent = "You win! Scissors beats paper!";
        playerPoints++;
        runningScore.textContent = playerPoints + " - " + computerPoints;
        //return "player win";
    }
    else if (playerSelection == "scissors" && computerSelection == "Scissors"){
        results.textContent = "Tie round!";
        //return "tie";
    }
    else{
        results.textContent = "Error! Invalid input!";
        //return null;
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
/*
function game(){

    let playerPoints = 0;
    let computerPoints = 0;

    for(let i = 0; i < 5; i++){

        let playerChoice = prompt("Enter rock, paper, or scissors: ");


        let computerChoice = computerPlay();
        let roundResult = singleRound(playerChoice, computerChoice);

        if (roundResult == "player win"){
            playerPoints++;
        }
        else if (roundResult == "computer win"){
            computerPoints++;
        }   
    }

    if (playerPoints > computerPoints){
        console.log("You win the game! The score was " + playerPoints + "-" + computerPoints + "!");
    }
    else if (playerPoints < computerPoints){
        console.log("You lose the game! The score was " + playerPoints + "-" + computerPoints + "!");
    }
    else{
        console.log("Tie game! The score was " + playerPoints + "-" + computerPoints + "!");
    } 
}

game();*/