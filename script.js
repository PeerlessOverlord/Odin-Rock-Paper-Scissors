let getHumanChoice = () => window.prompt();

function getComputerChoice(){
	const rock = "rock";
	const paper = "paper";
	const scissors = "scissors";

	let computerChoice = Math.random();

	if(computerChoice <= 0.3){ return rock; } 
	else if(computerChoice <= 0.6){ return paper; } 
	else { return scissors; }

}

let playGame = () => {
	let humanScore = 0;
	let computerScore = 0;
	let win = false;
	const numberOfRounds = 5;

	function playRound(humanChoice, computerChoice){
		humanChoice.toLowerCase();
		const rock = "rock";
		const paper = "paper";
		const scissors = "scissors";

		if(humanChoice === computerChoice){
			console.log("a tie!");	
		} else if(
			   (humanChoice == rock && computerChoice == paper) 
			|| (humanChoice == paper && computerChoice == scissors)
			|| (humanChoice == scissors && computerChoice == rock) 
		){ 
			win = false;  
			console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
		} else if(
			win = true; 
			console.log(`You win, ${humanChoice} wins against ${computerChoice}`);
		}
	}

	for(let i = 0; i < numberOfRounds; i++){
		playRound(getHumanChoice(), getComputerChoice());
		(win === true) ? humanScore++ : computerScore++;
	}
	
};


playGame();
