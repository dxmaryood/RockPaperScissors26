function getHumanChoice() {
	let humanChoice = prompt("Rock, Paper, Scissors, Shoot!");
    return humanChoice;
} 

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice === 0) {
        return "rock";
        } 
    if (choice === 1) {
        return "paper"; 
        } 
    if (choice === 2) {
        return "scissors";
    }
}

let beats = {
rock: "scissors",
paper: "rock",
scissors: "paper"
};

function playRound(humanChoice, computerChoice){
if (humanChoice === computerChoice) {
	return "It's a Tie!";
	}
if (beats[humanChoice] === computerChoice){
	return "You Win!";
	}
	return "Computer Wins!";
}

function playGame() {
  let humanScore = 0;
	let computerScore = 0;

	
for (let round = 0; round <= 4; round = round + 1){
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();


const winner = playRound(humanChoice,computerChoice);

if (winner === "You Win!"){
humanScore = humanScore + 1;
}
if (winner === "Computer Wins!") {
computerScore = computerScore + 1;
}

console.log("You: " + humanChoice + " | Computer: " + computerChoice);
console.log(winner);
console.log("Score: You " + humanScore + ", Computer " + computerScore);

};

if(humanScore > computerScore){
return ("You Win the Game!");
} 
else if (computerScore > humanScore) {
	return ("Computer Wins the Game!");
	} 
else {
	return "The Game is a Tie!"
	}
}

console.log(playGame());