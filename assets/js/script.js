document.addEventListener("DOMContentLoaded", function () {
  let gameArea = document.querySelector(".game-area");
  let scoreArea = document.querySelector(".score-area");
  let questionElement = document.querySelector(".question");
  let answersElement = document.querySelector(".answers");
  let button = document.getElementById("btn");
  let difficultySelect = document.getElementById("difficulty");
  let scoreDiv = document.getElementById("score");

  

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

  /* First get all the correct answers and then compare them with the selected answer if it's correct or not */
  const allCorrectAnswers = [];
  Object.values(questions).forEach(difficultyArray => {
    difficultyArray.forEach(question => {
      allCorrectAnswers.push(question.correctAnswer);
    });
  });

  if (allCorrectAnswers.includes(selectedAnswer)) {
    console.log("Correct!");
    score++;
    updateScore();
  } else {
    console.log("Incorrect!");
    score--;
    updateScore();
  }

  currentQuestionIndex++;
  displayQuestion();
}

  function setButtonText() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
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
    console.log("Quiz is finished.");
  }
});