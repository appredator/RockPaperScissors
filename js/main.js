let  botChoice = ""
let botCount = 0;
let playerCount = 0;

let playerChoice = ''



function computerChoice() { 

let holder = Math.random();

if(holder < .3333)
{
botChoice = "rock"

return botChoice;
}
else if (holder < .6666 && holder > .3333)
{
botChoice = "paper"

return botChoice;
}
else if (holder < 1 && holder > .6666)
{
botChoice = "scissors"
return botChoice;
}
}


  document.getElementById("button1").addEventListener('click', setPlayerChoiceRock)
document.getElementById("button1").addEventListener('click', game)

function setPlayerChoiceRock(){
    playerChoice = 'rock'
    console.log("Player Choice is ROck")
}


function playRound(compChoice, playerChoice){
let playerHolder = playerChoice.toLowerCase();

console.log(`Game has started. Computer choice is ${botChoice} and player choice is ${playerChoice}`)

if(compChoice === "rock" && playerHolder === "scissors"){
botCount++;
document.querySelector("#results").innerHTML = "Bot wins. Rock Beats Scissors"
document.querySelector("#botCount").innerHTML = botCount
return "Bot wins";
}
else if(compChoice === "paper" && playerHolder === "rock"){
botCount++;
document.querySelector("#results").innerHTML = "Bot wins. Paper Beats Rock"
document.querySelector("#botCount").innerHTML = botCount
return "Bot wins";
}
else if(compChoice === "scissors" && playerHolder === "paper"){
botCount++;
document.querySelector("#results").innerHTML = "Bot wins. Scissors Beats Paper"
document.querySelector("#botCount").innerHTML = botCount
return "Bot wins";
}
else if(compChoice === "rock" && playerHolder === "paper"){
playerCount++;
document.querySelector("#results").innerHTML = "Player wins. Paper Beats Rock"
document.querySelector("#playerCount").innerHTML = playerCount
return "You win";
}
else if(compChoice === "paper" && playerHolder === "scissors"){
playerCount++;
document.querySelector("#results").innerHTML = "Player wins. Scissors Beats Paper"
document.querySelector("#playerCount").innerHTML = playerCount
return "You win";
}
else if(compChoice === "scissors" && playerHolder === "rock"){
playerCount++;
document.querySelector("#results").innerHTML = "Player wins. Rock Beats Scissors"
document.querySelector("#playerCount").innerHTML = playerCount
return "You win";
}
else if (compChoice === playerHolder)
{
return "Tie"
}
}


function game(){

console.log("game function has been called")
for(let i = 1; i <= 25; i++){
playRound(computerChoice(), playerChoice);

if(playerCount == 5){
document.querySelector("#results").innerHTML = "Player wins 5 rounds"
return "Player wins 5 rounds"

break
}
else if (botCount == 5)
{
document.querySelector("#results").innerHTML = "Bot wins 5 rounds"
return "Bot wins 5 rounds"
break
}


}

}


// console.log(game());





