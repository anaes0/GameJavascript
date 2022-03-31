/* Check the js file is linked properly
alert("hello");*/

//create vars const
const vRock = 0 ; // 0 instead of "rock"
const vPaper = 1; // 1 instead of "paper"
const vScissors = 2;//2 instead of "scissors"

const tie = 0;
const win = 1;
const lost = 2;

// Do button const
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("text-intro");

//addEventListener for each button
rockBtn.addEventListener("click",()=>
{
	play(vRock);
});
paperBtn.addEventListener("click",()=>
{
	play(vPaper);
});
scissorsBtn.addEventListener("click",()=>
{
	play(vScissors);
});

//create function for play game
function play(userOption)
{ 
	//Check computer choice first
	const computerOption = Math.floor(Math.random() * 3);
	const result = calculateResult(userOption,computerOption);
	
	switch(result)
	{
		case tie:
			//resultText.
			alert("Computer got " + computerOption + "---> RESULT: You have tied!");
			resultText.innerHTML = "You have tied";
			break;
		case win:
			alert("Computer got " + computerOption + "---> RESULT: You win!");
			resultText.innerHTML = "You win, congrats!"
			break;
		case lost:
			alert("Computer got " + computerOption + "---> RESULT: You lose...");
			resultText.innerHTML = "You lose... Try again!"
			break;
	}
}

function calculateResult(userOption,computerOption)
{
	if(userOption === computerOption){
		return tie;
	}
	//User chooses Rock, possible results
	else if (userOption === vRock)
	{
		if(computerOption === vPaper)
		{
			return lost;
		}
		if(computerOption === vScissors)
		{
			return win;
		}
	}
	//User chooses Paper, possible results	
	else if (userOption === vPaper)
	{
		if(computerOption === vScissors)
		{
			return lost;
		}
		if(computerOption === vRock)
		{
			return win;
		}
	}
	//User chooses Scissors
	else if (userOption === vScissors)
	{
		if(computerOption === vRock)
		{
			return lost;
		}
		if(computerOption === vPaper)
		{
			return win;
		}
	}
}