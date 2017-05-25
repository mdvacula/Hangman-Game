

var listWords = ["cow", "fish" , "bird"];
var numGuesses = 0;
var word = getRandomWord();
var guessLimit = 0;
var underScores = [];
var wGuess = [];
var docGuess = document.getElementById("docGuess"); //variable to store 
var remGuess = document.getElementById("remGuess");
var docWord = document.getElementById("word");

remGuess.innerHTML = setLimit().toString();
console.log(word);
makeUnderscores();
docWord.innerHTML = underScores.join(" ");

function setLimit(){
	guessLimit = word.length * 1.5;
	
	return Math.floor(guessLimit);
}

 function makeUnderscores(){
	for(var i=0; i < word.length; i++){
		underScores[i] = "-";
	}
	
};

var displayGuesses = function(){
	docGuess.innerHTML = wGuess;
};


function getRandomWord(){
	var randWord;
	randWord = listWords[Math.floor(Math.random() * listWords.length)];
	return randWord;
};

document.onkeyup = function(event){
	var guess = event.key;

		
		if(word.indexOf(guess) == -1){
			
			if(wGuess.indexOf(guess) != -1){
				console.log("you guess that");
			}
			else{
				wGuess.push(guess);
				displayGuesses();
				guessLimit--;
				remGuess.innerHTML = guessLimit;
			}

		}

		else{
			var x = word.indexOf(guess);
			underScores[x] = guess;
			docWord.innerHTML = underScores.join(" ");

		}
};