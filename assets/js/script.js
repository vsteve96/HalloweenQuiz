document.addEventListener("DOMContentLoaded", function () {
  let gameArea = document.querySelector(".game-area");
  let scoreArea = document.querySelector(".score-area");
  let questionElement = document.querySelector(".question");
  let answersElement = document.querySelector(".answers");
  let button = document.getElementById("btn");
  let difficultyDiv = document.querySelector(".difficulty-select")
  let difficultySelect = document.getElementById("difficulty");
  let scoreDiv = document.getElementById("score");
  let welcomeMessage = document.querySelector(".welcome-container");
  let sndCorrect = new Audio("assets/sounds/correct.wav");
  let sndFail = new Audio("assets/sounds/fail.wav");
  

  let isMuted = false;
  let currentQuestionIndex = 0;
  let score = 0;
  let currentQuestions = [];
  initialize();
  
  /* Ensure function is available globally */
  window.toggleMute = function() { 
  isMuted = !isMuted;

  // Set audio elements to mute
  sndCorrect.muted = isMuted;
  sndFail.muted = isMuted;

  // Change the button color based on the mute state
  const muteBtn = document.getElementById("muteBtn");
  muteBtn.style.backgroundColor = isMuted ? "red" : "#000000";
  console.log("The page is muted:", isMuted);
  }

  function initialize() {
    button.textContent = "Start Quiz";
    button.addEventListener("click", startQuiz);
  }

  function startQuiz() {
    gameArea.style.display = "block";
    scoreArea.style.display = "block";
    welcomeMessage.style.display = "none";
    difficultyDiv.style.display = "none";
    shuffleQuestions();
    displayQuestion();
  }

  function shuffleQuestions() {
    let selectedDifficulty = difficultySelect.value;
    currentQuestions = questions[selectedDifficulty];

    // Sort the questions array with a random comparator
    currentQuestions.sort(() => Math.random() - 0.5);
  }

  function displayQuestion() {
    let selectedDifficulty = difficultySelect.value;
    currentQuestions = questions[selectedDifficulty];
    

    /* Display 5 questions */
    if (currentQuestionIndex < currentQuestions.length -5) {
      let currentQuestion = currentQuestions[currentQuestionIndex];

      questionElement.textContent = currentQuestion.question;
      displayAnswers(currentQuestion.answers);

      setButtonText();
    } else if (currentQuestionIndex === currentQuestions.length - 5) {
    displayFinalScore(); // Call displayFinalScore only once when the condition is first met
    }
  }

  function displayAnswers(answerList) {
    answersElement.innerHTML = "";
      /* Add answer buttons */
    answerList.forEach(function (answer) {
      let answerButton = document.createElement("button");

      answerButton.classList.add("answer-button");
      answerButton.textContent = answer;
      answerButton.addEventListener("click", function () {
        handleAnswerSelection(answer);
      });
      answersElement.appendChild(answerButton);
    }); 
  }

  function handleAnswerSelection(selectedAnswer) {
    // Disable click events on answer buttons temporarily
    disableAnswerButtons();

    const allCorrectAnswers = [];
    Object.values(questions).forEach(difficultyArray => {
      difficultyArray.forEach(question => {
        allCorrectAnswers.push(question.correctAnswer);
      });
    });

    setTimeout(() => {
      if (allCorrectAnswers.includes(selectedAnswer)) {
        console.log("Correct!");
        // Change the color of the selected answer button to green
        highlightAnswerButton(selectedAnswer, "green");
        score++;
        updateScore();
        sndCorrect.play();
      } else {
        console.log("Incorrect!");
        // Change the color of the selected answer button to red
        highlightAnswerButton(selectedAnswer, "red");
        sndFail.play();
      }

        // Show the next question
        currentQuestionIndex++;
        setButtonText();
  }, 1000); // Delay on showing the answer result
}

  function disableAnswerButtons() {
  const answerButtons = document.querySelectorAll(".answer-button");
  answerButtons.forEach(button => {
    button.disabled = true;
  });
}

/* Set a button color based on whether the answer is correct. */
  function highlightAnswerButton(selectedAnswer, color) {
    const answerButtons = document.querySelectorAll(".answer-button");
    answerButtons.forEach(button => {
      if (button.textContent === selectedAnswer) {
        button.style.backgroundColor = color;
      }
    });
  }

  function setButtonText() {
    if (currentQuestionIndex < currentQuestions.length - 5) {
      button.textContent = "Next Question";
    } else {
      button.textContent = "Finish";
    }
  }

  function updateScore() {
    scoreDiv.innerHTML = `Score: 
    ${score}`;
  }

 function displayFinalScore() {
  gameArea.style.display = "none";
  scoreArea.style.display = "none";
  difficultyDiv.style.display = "none";
  button.style.display = "none";
  const muteBtn = document.getElementById("muteBtn");
  muteBtn.style.display = "none";

  // Create the finishing message container
  let finishContainer = document.createElement("div");
  finishContainer.classList.add("finish-container");

  // Display the final score in the finishing message
  let finalScoreMessage = document.createElement("p");
  finalScoreMessage.textContent = `Congratz! Your final score is: ${score}`;
  finishContainer.appendChild(finalScoreMessage);

  // Create the "Play Again" button
  let playAgainButton = document.createElement("button");
  playAgainButton.textContent = "Play Again";
  playAgainButton.classList.add("play-again-button");
  finishContainer.appendChild(playAgainButton);

  document.body.appendChild(finishContainer);

  // Return the finishContainer so that it can be accessed outside this function
  return finishContainer;
}

  // Function to handle the "Play Again" logic
  function playAgain() {
  // Reset variables and elements for a new game
  currentQuestionIndex = 0;
  score = 0;

  gameArea.style.display = "block";
  scoreArea.style.display = "block";
  button.style.display = "block";
  const muteBtn = document.getElementById("muteBtn");
  muteBtn.style.display = "block";
    

  // Get the finish container and remove it
  const finishContainer = document.querySelector(".finish-container");
  finishContainer.remove();

  // Start the new game by displaying the first question
  displayQuestion();
}
  
  document.addEventListener("click", function (event) {
  if (event.target.classList.contains("play-again-button")) {
    playAgain();
  }
})
});