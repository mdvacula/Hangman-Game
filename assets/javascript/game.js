

var listWords = ["giraffe","llamma","alpaca","sloth",""];								//array of words							
var word = "";																					//sets word to random word
var remainGuess = 0;																		//variable to store limit of guesses based on word length
var corCount = 0;
var underScores = [];																		//array to store underscores
var wGuess = [];																				//array to store guesses
var docGuess = document.getElementById("docGuess"); 		//span to show list of guesses
var remGuess = document.getElementById("remGuess");			//span for remaining guesses
var docWord = document.getElementById("word");					//span for displaying underscores/word
var nButton = document.getElementById("nButton");				//button to start new game when old game ends
var docStat = document.getElementById("status");

nButton.addEventListener("click", function(){						//listener for newgame button
	newGame();																						//calls function newgame when button clicked
});	

//Sets up a new Game
function newGame(){
wGuess.length = 0;																			//resets array for guesses
underScores.length = 0;																	//resets array for underscores
corCount = 0;																						//resets counter for correct count
displayGuesses();																				//resets Guess list in html
word = getRandomWord();																	//sets word to new random word
remGuess.innerHTML = setNumGuess().toString();					//displays limit in html
console.log(word);																			//logs word for testing purposes
makeUnderscores();																			//populate array with underscores
docWord.innerHTML = underScores.join("");								//display underscores without commas
}


// Set number of guesses allowed
// 	returns rounded guess limit
function setNumGuess(){
	remainGuess = Math.floor(word.length * 1.5);					//sets limit equal to 1.5 times the length of word
	
	return remainGuess;
}

//Function to populate array with underscores
//based on word length
 function makeUnderscores(){	
	for(var i=0; i < word.length; i++){										//loop for number of letters in word
			if(word.charAt(i) == " "){												//check if character is a space
				underScores[i] == " ";													//insert space into array
				corCount++;																			//increase correct count
			}
			else{
			underScores[i] = "-";																//populate underscores into array
			}
	}
	
};
//Swaps out underscores for letters when correctly guesed
//input: player guess

function swapUnderscores(guess){											
	for(var i=0;i<word.length;i++){												//loop through word based on length of word
		if(guess == word.charAt(i)){												//check if guess is equal to character in word
			underScores[i] = guess;													//if it is the same place guess in that place in function
			corCount++;
			}	
		else{
			//Do Nothing
		}
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


 function retMessage(x){
 		switch(x){

 			case 1: 
 			return("You already guessed this Letter, Try Another");

 			case 2:
 			return("Only Letters Are accepted");

 			case 3: 
 			return("Game Over: Select a new game to play again");

 			case 4:
 			return("You Win!! Select a new game to play again");


 		}
 };

//---------------BEGINNING OF GAME LOGIC---------------------------

newGame();																							//begins game when page loads


//Function handling main logic every time key is pressed
document.onkeyup = function(event){

	var re = /[a-zA-Z]/;																	//Regular Expression to test in guess was a letter
	var guess = event.key;																//variable storing the value of a key press
	guess = guess.toLowerCase();
		
	if((remainGuess <= 0) || (corCount >= word.length)){		//Checks if player still has remaining turns or has won game
		
		docStat.innerHTML = retMessage(3);
	}

	else{
		if(re.test(guess) == false){										//Test if something other than a letter is inputed
			docStat.innerHTML = retMessage(2);
			console.log("Only letters are accepted");			//(unfortunatily this is not working for arrow keys)
		}
		else{
			if(word.indexOf(guess) == -1){								//condition statment to see if the guess is in the word 
																										//if true the guess is not in the word
				
				if(wGuess.indexOf(guess) != -1){						//condiditon statment to check if guess is in array of guesses
				docStat.innerHTML = retMessage(1);
				console.log("You already guessed that");
				}

				else{									
					wGuess.push(guess);												//add guess to array of incorrect guesses
					displayGuesses();													//display the guesses
					remainGuess--;														//decrement remaining guesses
					remGuess.innerHTML = remainGuess;					//update the guesses remaining count
				}

			}

			else{																					//guess was correct
				swapUnderscores(guess);											//changes value of underscore array to correct letter
				docWord.innerHTML = underScores.join("");		//updates the html to show letter in correct spot of word

					if(corCount == word.length){
						docStat.innerHTML = retMessage(4);
					}
					else{
						//Do Nothing 
					}

			}
		}
	}
};