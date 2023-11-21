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
  
  let currentQuestionIndex = 0;
  let score = 0;
  let currentQuestions = [];
  initialize();

  function initialize() {
    button.textContent = "Start Quiz";
    button.addEventListener("click", startQuiz);
  }

  function startQuiz() {
    gameArea.style.display = "block";
    scoreArea.style.display = "block";
    welcomeMessage.style.display = "none";
    difficultyDiv.style.display = "none";
    displayQuestion();
  }

  function displayQuestion() {
    let selectedDifficulty = difficultySelect.value;
    currentQuestions = questions[selectedDifficulty];

    if (currentQuestionIndex < currentQuestions.length) {
      let currentQuestion = currentQuestions[currentQuestionIndex];

      questionElement.textContent = currentQuestion.question;
      displayAnswers(currentQuestion.answers);
    } else {
      displayFinalScore();
    }
  }

  function displayAnswers(answerList) {
    answersElement.innerHTML = "";

    answerList.forEach(function (answer) {
      let answerButton = document.createElement("button");

      answerButton.classList.add("answer-button");
      answerButton.textContent = answer;
      answerButton.addEventListener("click", function () {
        handleAnswerSelection(answer);
      });
      answersElement.appendChild(answerButton);
    });

    setButtonText();
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

    // Use setTimeout to delay the color change
    setTimeout(() => {
      if (allCorrectAnswers.includes(selectedAnswer)) {
        console.log("Correct!");
        // Change the color of the selected answer button to green
        highlightAnswerButton(selectedAnswer, "green");
        score++;
        updateScore();
      } else {
        console.log("Incorrect!");
        // Change the color of the selected answer button to red
        highlightAnswerButton(selectedAnswer, "red");
        score--;
        updateScore();
      }

        setTimeout(() => {
        // Show the next question
        currentQuestionIndex++;
        displayQuestion();
    }, 2000); // Delay on displaying the next question
  }, 2000); // Delay on showing the answer result
}

  function disableAnswerButtons() {
  const answerButtons = document.querySelectorAll(".answer-button");
  answerButtons.forEach(button => {
    button.disabled = true;
  });
}

  function highlightAnswerButton(selectedAnswer, color) {
    const answerButtons = document.querySelectorAll(".answer-button");
    answerButtons.forEach(button => {
      if (button.textContent === selectedAnswer) {
        button.style.backgroundColor = color;
      }
    });
  }

  function setButtonText() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      button.textContent = "Next Question";
    } else {
      button.textContent = "Finish";
    }
  }

  function updateScore() {
    scoreDiv.innerHTML = `Score: ${score}`;
  }

  function displayFinalScore() {
    console.log("Quiz is finished.");
  }
});