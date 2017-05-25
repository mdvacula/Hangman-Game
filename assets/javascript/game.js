

var listWords = ["cow", "fish" , "bird"];
var word = getRandomWord();
var wGuess = [];
var docGuess = document.getElementById("docGuess"); //variable to store 


console.log(word);

var displayGuesses = function(){
	for(i=0; i< wGuess.length; i++){
		return wGuess[i];
	}
};


function getRandomWord(){
	var randWord;
	randWord = listWords[Math.floor(Math.random() * listWords.length)];
	return randWord;
};

document.onkeyup = function(event){
	var guess = event.key;
	// console.log(guess);
	// console.log(typeof guess);

	if(word.indexOf(guess) == -1){
		wGuess.push(guess);
		var letter = document.createElement(displayGuesses);
		docGuess.appendChild(letter);
	}

	else{
		console.log("Correct: " + guess);
	}
};