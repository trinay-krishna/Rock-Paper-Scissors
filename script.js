function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    if(choice==0)
        return "Rock"
    else if (choice==1)
        return "Paper"
    else
        return "Scissors"
}

function playRound(playerSelection,computerChoice){
    let winner;
    setChoiceDisplay(playerSelection,computerChoice)
    playerSelection=playerSelection.toUpperCase();
    if(playerSelection=="ROCK"){
        if(computerChoice=="Rock")
            winner="Tie"
        else if(computerChoice=="Paper")
            winner="Lose"
        else
            winner="Win"
    }
    else if(playerSelection=="PAPER"){
        if(computerChoice=="Paper")
            winner="Tie"
        else if(computerChoice=="Scissors")
            winner="Lose"
        else
            winner="Win"

    }
    else{
        if(computerChoice=="Scissors")
            winner="Tie"
        else if(computerChoice=="Rock")
            winner="Lose"
        else
            winner="Win"
    }
    playerSelection=playerSelection.charAt(0)+playerSelection.slice(1).toLowerCase()
    if(winner=="Tie"){
        computerPoints++;
        playerPoints++;
        roundWinnerText.textContent=`It's a Tie! ${playerSelection} and ${computerChoice}`
    }
    else if(winner=="Win"){
        playerPoints++;
        roundWinnerText.textContent=`You ${winner}! ${playerSelection} beats ${computerChoice}`
    }
    else{
        computerPoints++;
        roundWinnerText.textContent=`You ${winner}! ${computerChoice} beats ${playerSelection}`
    }

}

function checkInput(playerSelection,event){
    if(playerSelection!="ROCK" && playerSelection!="PAPER" && playerSelection!="SCISSORS")
        return false
    return true
}

function setPoints(){
    playerPointsText.textContent=`Player Points: ${playerPoints}`;
    computerPointsText.textContent=`Computer Points: ${computerPoints}`
}

function declareWinner(){
    let winner;
    gameFinish=1;
    if(playerPoints==5 && computerPoints==5)
        winner=`${playerPoints}-${computerPoints} It's a Tie!`;
    else if(playerPoints==5)
        winner=`${playerPoints}-${computerPoints} Player Wins!`;
    else
        winner=`${playerPoints}-${computerPoints} Computer Wins!`;
    winnerText.textContent=winner;
}

function reloadGame(){
    playerPoints=computerPoints=0;
    gameFinish=0;
    setPoints();
    winnerText.textContent='';
    roundWinnerText.textContent='';
    playerChoiceDisplay.textContent="❔";
    computerChoiceDisplay.textContent="❔";
}

function setChoiceDisplay(playerChoice,computerChoice){
    let player=playerChoiceDisplay;
    let computer=computerChoiceDisplay;
    switch(playerChoice){
        case "Rock":
            player.textContent="✊";
            break;
        case "Paper":
            player.textContent="✋";
            break;
        case "Scissors":
            player.textContent="✌";
            break;
    }

    switch(computerChoice){
        case "Rock":
            computer.textContent="✊";
            break;
        case "Paper":
            computer.textContent="✋";
            break;
        case "Scissors":
            computer.textContent="✌";
            break;
    }
}
let playerPoints=0,computerPoints=0;
let gameFinish=0;
const playerChoiceDisplay=document.querySelector('.playerChoice');
const computerChoiceDisplay=document.querySelector('.computerChoice');
const options=document.querySelector('ul');
const btnPlayAgain=document.querySelector('#playAgain');
const playerPointsText=document.querySelector('#playerPoints');
const computerPointsText=document.querySelector('#computerPoints');
const winnerText=document.querySelector('#winner');
const roundWinnerText=document.querySelector('.roundWinner h2');

options.addEventListener('click',
    (event)=>{
        const target=event.target;
        const choice=target.id;
        if(choice=='' || gameFinish)
            return;
        playRound(choice,getComputerChoice());
        if(computerPoints==5 || playerPoints==5)
            declareWinner();
        setPoints();
    }
);

btnPlayAgain.addEventListener('click',
    ()=>{
        reloadGame();
    }
);


