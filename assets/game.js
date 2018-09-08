var win = 0;
var lose = 0;
var guessesLeft = 9;
var guessesSoFar = [];
	
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	
function reset (){
	guessesLeft = 9;	
	guessesSoFar = [];
	computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
	console.log (computerGuess);
}
    reset();

function newword (){
	guessesSoFar = [];
	guessesLeft = 9;
	computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
	console.log (computerGuess);
	}

	
document.onkeyup = function(event) {
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	if (guessesSoFar.indexOf(userGuess) === -1){
		guessesSoFar.push(userGuess);
		}

	else {
		alert ("You already guess this letter");
		guessLeft++;
		lose--;
		
		
	}
		if (userGuess === computerGuess) {
			win++;
			alert ("Your guess is right");
			newword();
		}

		else {
			lose++;
			guessesLeft -- ;
		}
		if (guessesLeft === 0) {
			
			alert ("You lost")
			reset();
        }
        
	document.querySelector('#win').innerHTML = "Win: " + win;
    document.querySelector('#lose').innerHTML = "Lose: " +lose;
    document.querySelector('#guessesLeft').innerHTML = "Number of guesses left: " + guessesLeft;
    document.querySelector('#guessesSoFar').innerHTML = " Your guesses so far: " + guessesSoFar;


};