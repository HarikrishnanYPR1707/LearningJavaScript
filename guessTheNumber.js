let randomNumber = Math.floor(Math.random() * 100);
let chances = 0;

while(true) {
	let userInput = Number.parseInt(prompt("Guess the  number : "));

	if(userInput == randomNumber) {
		console.log(`The guessed number \"${userInput}\" is correct.`);
		break;
	} else if (userInput > randomNumber) {
		console.log(`The guessed number \"${userInput}\" is a wrong guess.
			But it is \"Greater\" then the \"Actual Number\".`)
	} else {
		console.log(`The guessed number \"${userInput}\" is a wrong guess.
			But it is \"Less\" then the \"Actual Number\".`)
	}

	chances++;
}

console.log(`The number of chances you took was ${chances}.`)