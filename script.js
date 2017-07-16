 //make variable for buttons
 //  var buttons = document.getElementById('square0', 'square1', 'square2', 'square3', 'square4'),
 //      for (i = 0, i <= buttons.legth, i++)
 //      //make variable for questions array
 //          var questions = prompt["What color is Kermit the frog?", "What color is an Apple?", "What color are clouds?"],
 //          for (i = 0, i <= questions.length, i++);

 //  $(questions[i]).prompt()

 //  //make variable for answers array
 //  var answers = (questions[i]);
 //  for (i = 0, i = questions.length, i++),
 //  if (answers[i] === questions[i]) {
 //      console.log("Congratulations, You are correct!");

 //  } else {
 //      console.log('Sorry, that answer is incorrect.');
 //  };
 //  //make variable for pointValue
 //  var pointValue = document.getElementById("scoreBoard");
 //  parseInt


 //create 'click' event to display a prompt
 //with the question, an input box, and submit button//
 //make input acceptable in any letter case
 //create function to loop through questions and match to corresponding answer
 //create 'alert' to notify player if 'correct' or 'incorrect
 //if player is correct: add points value to score board
 //if player is incorrect: subtract points from score board
 //change color of button box to show as 'completed' or 'disabled'
 //  var myQuestions = [
 //      ["What color is Kermit the frog?", "green"],
 //      ["What color is an Apple?", "orange"],
 //      ["What color are clouds?", "white"],
 //  ]
 //  for (i = 0, )


 //      $("#square0").on('click', function() {
 //      var x = prompt(questionOne)
 //      if (x === answerOne) {
 //          alert("Correct");
 //      } else {
 //          alert("Sorry, your answer is Incorrect")
 //      }
 //  });

 //  var scoreValue =


 //when user clicks button
 //prompt pop-up with question and input box
 //when user inputs answer; which needs to be case insensitive
 //user then clicks submit button
 //alert user IF correct
 //add value to scoreBoard
 //alert user ELSE incorrect
 //subtract value to scoreBoard
 //change button to different color to inform user that it is disabled.



 //  $("button").click(function() {
 //          prompt()



 //          var questions = {
 //              a: ['questionOne', 'questionTwo', 'questionThree',
 //                  'questionFour', 'questionFive'
 //              ],
 //          };
 //          var answers = {
 //              b: ['answerOne', 'answerTwo', 'answerThree', 'answerFour', 'answerFive'],
 //          };

 //          if (a[] === b[]) {
 //              console.log //or alert// 
 //                  ("Congratulations, your answer is correct!")
 //          } else {
 //              console.log("Sorry, your answer is incorrect")
 //          }

 //BONUS//

 //after all buttons have been clicked
 //alert user that the game has ended
 //include their final score
 //'play again' button
 //reset buttons


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