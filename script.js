//this is the player's score
//create a function to update the player's score
var playerScore = 0;
//create a function to update the player's score
//when you are checking the userInput against a question
function updateScore() {
    $('#playerScore').text('Score: ' + playerScore.toString());
}


//first create the array of objects
//Make questions with multiple choice answers
// To space to next line use \n
//The answer will correspond to the letter, not the full text
console.log("test test test");
var gameComponents = [{
        question: "who co-wrote the 1975 single Fame with Bowie??\n\n a)Elton John \n b) John Lennon \n c) Paul McCartney \n d) Freddie Mercury ",
        answer: "b",
        value: 100,
    },
    {
        question: "what is the first name of the character Bowie played in Martin Scorsese's The Last Temptation of Christ?\n\n a) Pontius \n b) Jareth \n c) Phillip \n d) Batman ",
        answer: "a",
        value: 200,
    },
    {
        question: "Bowie shares the same birthday as what other famous musician?\n\n a) Elvis \n b) Billy Idol \n c) Frank Sinatra \n d) L.L. Cool J ",
        answer: "a",
        value: 300,
    },
    {
        question: "What Bowie song was used by the BBC in it's coverage of the moon landing?\n\n a) Life on Mars \n b) Starman \n c) Rebel Rebel \n d) Space Oddity ",
        answer: "d",
        value: 400,
    },
    {
        question: "This fictional character has appeared in three Bowie hits- Space Oddity, Ashes To Ashes, and Hallo Spaceboy? \n\n a) Officer Johnny \n b) Ziggy Stardust \n c) Major Tom \n d) Sgt. Pepper ",
        answer: "c",
        value: 500,
    },

]



//This creates the game board using the array of objects.
for (var i = 0; i < gameComponents.length; i++) {

    var boxPieces = document.createElement("buttons");
    boxPieces.className = "buttons";
    boxPieces.innerHTML = gameComponents[i].value;
    boxPieces.setAttribute('question', gameComponents[i].question);
    boxPieces.setAttribute('answer', gameComponents[i].answer);
    boxPieces.setAttribute('value', gameComponents[i].value);
    //make boxPieces attach to html    
    document.body.appendChild(boxPieces);
}

$('.buttons').click(function() {
    //when you click a box display a prompt with the corresponding question
    //save the prompt into a variable, this will be your userInput
    var userInput = prompt(this.getAttribute('question'), "Type in letter");
    var anyAnswer = userInput.toLowerCase();
    var points = this.getAttribute('value');
    $(this).css({ 'background': 'gray' });

    //check if the userInput is equal to the correct answer of the question
    // display right or wrong
    if (anyAnswer === this.getAttribute('answer')) {
        //if correct, add to that player's score
        playerScore += parseInt(points);
        updateScore();
        alert("Your answer is correct!!!");
        //if wrong, deduct
    } else {
        playerScore -= parseInt(points);
        updateScore();
        alert("Sorry, that answer is incorrect.");
    }
    //call the update function when this happens
    winLose();

});

//create function for Win or Lose

function winLose() {
    if (playerScore >= 1000) {
        alert("YOU WIN!");
        resetBoard();
        $('.buttons').css({ 'background': "#6786ca" });

    }
}

// create Reset board ^^^
function resetBoard() {
    playerScore = 0;
    updateScore();
};