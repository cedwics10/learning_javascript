let gameChoices = ['Pi', 'Ci', 'Fe'];
let advantage = {'Pi' : 'Ci', 'Ci' : 'Fe', 'Fe': 'Pi'};
let playerScore = 0;
let computerScore = 0;

function updateScore()
{
    document.getElementById('computerScore').innerHTML = computerScore;
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerChoice').innerHTML = computerChoice;
}

function whoWins()
{
    playersChoice = document.getElementById('choix').value;
    keyChoiceO = Math.floor(Math.random()*gameChoices.length);
    computerChoice = gameChoices[keyChoiceO];
    console.log(playersChoice);   
    console.log(computerChoice);
    console.log((advantage[playersChoice] == computerChoice) ? 'gagne' : 'perdu');
    if(advantage[playersChoice] == computerChoice)
    {
        playerScore += 1;
    }
    else if(playersChoice != computerChoice)
    {
        computerScore += 1;
    }
    updateScore()
}

document.getElementById('buttonWin').addEventListener('click',whoWins);