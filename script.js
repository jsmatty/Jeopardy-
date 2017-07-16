//this is the player's score
var playerScore = 0;

function updateScore() {
    $('#playerScore').text('Score: ' + playerScore.toString());
}


//first create the array of objects
console.log("mic check");
var gameComponents = [{
        question: "What color is Kermit the frog?",
        answer: "green",
        value: 100
    },
    {
        question: "What color is a lemon?",
        answer: "yellow",
        value: 200,
    },
    {
        question: "What color is ketchup?",
        answer: "red",
        value: 300,
    },
    {
        question: "What color are carrots?",
        answer: "orange",
        value: 400,
    },
    {
        question: "what is the PBR logo?",
        answer: "blue",
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
    document.body.appendChild(boxPieces);
}

$('.buttons').click(function() {
    //when you click a box display a prompt with the corresponding question
    var userInput = prompt(this.getAttribute('question'));
    var anyAnswer = userInput.toLowerCase();
    var points = this.getAttribute('value');
    $(this).css({ 'background': 'gray' });
    //  $('.buttons').css('background', 'red');
    //save the prompt into a variable, this will be your userInput
    if (anyAnswer === this.getAttribute('answer')) {
        playerScore += parseInt(points);
        updateScore();
        alert("Your answer is correct!!!");
    } else {
        playerScore -= parseInt(points);
        updateScore();
        alert("Sorry, that answer is incorrect.");
    }
    winLose();
    //check if the userInput is equal to the correct answer of the question
    // display right or wrong
});

//make a GLOBAL variable to hold the player's score
//create a function to update the player's score
//when you are checking the userInput against a question
//if correct, add to that player's score
//if wrong, deduct
//call the update function when this happens

//create function for Win or Lose
// create Reset board ^^^
function winLose() {
    if (playerScore >= 1000) {
        alert("YOU WIN!");
        resetBoard();
        $('.buttons').css({ 'background': "#6786ca" });

    }
}


function resetBoard() {
    playerScore = 0;
    updateScore();
};