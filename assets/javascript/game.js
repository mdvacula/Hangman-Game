

var listWords = ["cow", "fish" , "bird"];	//array of words							
var word = "";				//sets word to random word
var guessLimit = 0;							//variable to store limit of guesses based on word length
var underScores = [];						//array to store underscores
var wGuess = [];							//array to store guesses
var docGuess = document.getElementById("docGuess"); 	//span to show list of guesses
var remGuess = document.getElementById("remGuess");		//span for remaining guesses
var docWord = document.getElementById("word");			//span for displaying underscores/word
var nButton = document.getElementById("nButton");

nButton.addEventListener("click", function(){
	newGame();
});

newGame();

//Sets up a new Game
function newGame(){
word = getRandomWord();
remGuess.innerHTML = setLimit().toString();				//displays limit in html
console.log(word);										//logs word for testing purposes
makeUnderscores();										//populate array with underscores
docWord.innerHTML = underScores.join(" ");				//display underscores without commas
}


// Set number of guesses allowed
// 	returns rounded guess limit
function setLimit(){
	guessLimit = word.length * 1.5;		//sets limit equal to 1.5 times the length of word
	
	return Math.floor(guessLimit);
}

//Function to populate array with underscores
//based on word length
 function makeUnderscores(){	
	for(var i=0; i < word.length; i++){
		underScores[i] = "-";
	}
	
};

//Function to display guesses in html
var displayGuesses = function(){
	docGuess.innerHTML = wGuess;
};

//Function to get random word from array of words
//returns a random word
function getRandomWord(){
	var randWord;
	randWord = listWords[Math.floor(Math.random() * listWords.length)];
	return randWord;
 };	

//Function handling main logic every time key is pressed
document.onkeyup = function(event){
	var guess = event.key;		//variable storing the value of a key press

		
		if(word.indexOf(guess) == -1){					//condition statment to see if the guess is in the word 
														//if true the guess is not in the word
			
			if(wGuess.indexOf(guess) != -1){			//condiditon statment to check if guess is in array of guesses
				console.log("you guess that");
			}

			else{									
				wGuess.push(guess);						//add guess to array of incorrect guesses
				displayGuesses();						//display the guesses
				guessLimit--;							//decrement remaining guesses
				remGuess.innerHTML = guessLimit;		//update the guesses remaining count
			}

		}

		else{											//guess was correct
			var x = word.indexOf(guess);				//stores index of where letter is in word
			underScores[x] = guess;						//changes value of underscore array to correct letter
			docWord.innerHTML = underScores.join(" ");	//updates the html to show letter in correct spot of word

		}
};