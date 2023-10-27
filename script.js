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
            winner="It's a Tie! Rock and Rock"
        else if(computerChoice=="Paper")
            winner="You Lose! Paper beats Rock"
        else
            winner="You Win! Rock beats "+ computerChoice
    }
    else if(playerSelection=="PAPER"){
        if(computerChoice=="Paper")
            winner="It's a Tie! Paper and Paper"
        else if(computerChoice=="Scissors")
            winner="You Lose! Scissors beats Paper"
        else
            winner="You Win! Paper beats "+computerChoice

    }
    else{
        if(computerChoice=="Scissors")
            winner="It's a Tie! Scissors and Scissors"
        else if(computerChoice=="Rock")
            winner="You Lose! Rock beats Scissors"
        else
            winner="You Win! Scissors beats "+computerChoice
    }

    if(winner.charAt(5)=='a'){
        computerPoints++;
        playerPoints++;
    }
    else if(winner.charAt(5)=='o')
        computerPoints++;
    else
        playerPoints++;
    return winner
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

