window.onload = function() {
    
    //establish global variables
    var retroWords = ["record", "diner", "greaser", "milkshake", "jukebox",];
    var wins = 0;
    var guessesRemaining = 0;
    var lettersGuessed = [];

    //make computer pick a word from 50s array
    var computerWord = retroWords[Math.floor(Math.random() * retroWords.length)];

    //hide the computer-selected word with dashes and display that on page
    var word = [];
    for (var i = 0; i < computerWord.length; i++) {
        word.push("-");
    };
    var wordPlaceholder = word.join(" ");
    document.getElementById("word").innerHTML = wordPlaceholder;

};
