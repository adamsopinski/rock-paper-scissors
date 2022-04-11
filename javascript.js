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
        console.log("Tie round!");
        return "tie";
    }
    else if (playerSelection == "rock" && computerSelection == "Paper"){
        console.log("You lose! Paper beats rock!");
        return "computer win";
    }
    else if (playerSelection == "rock" && computerSelection == "Scissors"){
        console.log("You win! Rock beats scissors!");
        return "player win";
    }
    else if (playerSelection == "paper" && computerSelection == "Rock"){
        console.log("You win! Paper beats rock!");
        return "player win";
    }
    else if (playerSelection == "paper" && computerSelection == "Paper"){
        console.log("Tie round!");
        return "tie";
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors"){
        console.log("You lose! Scissors beats paper!");
        return "computer win";
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock"){
        console.log("You lose! Rock beats scissors!");
        return "computer win";
    }
    else if (playerSelection == "scissors" && computerSelection == "Paper"){
        console.log("You win! Scissors beats paper!");
        return "player win";
    }
    else if (playerSelection == "scissors" && computerSelection == "Scissors"){
        console.log("Tie round!");
        return "tie";
    }
    else{
        console.log("Error! Invalid input!");
        return null;
    }
}

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

game();