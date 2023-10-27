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
        return `It's a Tie! ${playerSelection} and ${computerChoice}`
    }
    else if(winner=="Win"){
        playerPoints++;
        return `You ${winner}! ${playerSelection} beats ${computerChoice}`
    }
    else{
        computerPoints++;
        return `You ${winner}! ${computerChoice} beats ${playerSelection}`
    }

}

function checkInput(playerSelection){
    if(playerSelection!="ROCK" && playerSelection!="PAPER" && playerSelection!="SCISSORS")
        return false
    return true
}

function game(){
    let playerSelection
    playerPoints=computerPoints=0
    for(let gameCount=1;gameCount<=5;gameCount++){
        while(true){
            playerSelection=prompt(`Round ${gameCount}\nRock, Paper or Scissors?`)
            playerSelection=playerSelection.toUpperCase()
            if(checkInput(playerSelection))
                break;
            else
                alert("Invalid Choice! perhaps a typo?")
        }   
        let computerChoice=getComputerChoice();
        let winner=playRound(playerSelection,computerChoice)
        alert(winner)
    }
    if(playerPoints>computerPoints)
        alert(`${playerPoints}-${computerPoints} Player Wins!`)
    else if(playerPoints==computerPoints)
        alert(`${playerPoints}-${computerPoints} It's a Tie!`)
    else
        alert(`${playerPoints}-${computerPoints} Computer Wins!`)
}
let playerPoints,computerPoints;
game()

