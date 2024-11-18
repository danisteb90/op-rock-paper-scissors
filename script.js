let humanScore = 0;
let computerScore = 0;
let numberOfRounds = 1;

const getComputerChoice = () => {
	const choice = ["rock", "paper", "scissor"];
	const randomChoice = Math.floor(Math.random() * 3);
	return choice[randomChoice];
};

const getHumanChoice = () => {
	let humanChoiceLower;
	do {
		const humanInput = prompt("Write Rock, Paper or Scissor to start playing");
		humanChoiceLower = humanInput.toLowerCase();
		if (
			humanChoiceLower != "rock" &&
			humanChoiceLower != "paper" &&
			humanChoiceLower != "scissor"
		) {
			alert("Argument not valid, please choose Rock, Paper or Scissor");
		}
	} while (
		humanChoiceLower != "rock" &&
		humanChoiceLower != "paper" &&
		humanChoiceLower != "scissor"
	);
	return humanChoiceLower;
};

const playRound = (humanChoice, computerChoice) => {
	if (humanChoice === computerChoice) {
		alert(
			`Empate. Ronda: ${numberOfRounds} Puntuación: Humano ${humanScore} - Computadora ${computerScore}`
		);
	} else if (
		(humanChoice === "rock" && computerChoice === "scissor") ||
		(humanChoice === "paper" && computerChoice === "rock") ||
		(humanChoice === "scissor" && computerChoice === "paper")
	) {
		humanScore++;
		alert(
			`Has ganado esta ronda. Ronda: ${numberOfRounds} Puntuación: Humano ${humanScore} - Computadora ${computerScore}`
		);
	} else {
		computerScore++;
		alert(
			`Has perdido esta ronda. Ronda: ${numberOfRounds} Puntuación: Humano ${humanScore} - Computadora ${computerScore}`
		);
	}
};

const playGame = () => {
	do {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
		playRound(humanSelection, computerSelection);
		numberOfRounds++;
	} while (numberOfRounds < 6);
	if (humanScore > computerScore) {
		alert("Has ganado el juego");
	} else if (humanScore < computerScore) {
		alert("Has perdido el juego");
	} else {
		alert("El juego terminó en empate");
	}
};

playGame();
