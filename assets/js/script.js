document.addEventListener("DOMContentLoaded", function () {
  let gameArea = document.querySelector(".game-area");
  let scoreArea = document.querySelector(".score-area");
  let questionElement = document.querySelector(".question");
  let answersElement = document.querySelector(".answers");
  let button = document.getElementById("btn");
  let difficultySelect = document.getElementById("difficulty");
  let scoreDiv = document.getElementById("score");

  let questions = {
    easy: [
      {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
      },
      // Add more easy questions
    ],
    medium: [
      {
        question: "Which planet is known as the Red Planet?",
        answers: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
      },
      // Add more medium questions
    ],
    hard: [
      {
        question: "In which year did the French Revolution begin?",
        answers: ["1789", "1799", "1809", "1819"],
        correctAnswer: "1789",
      },
      // Add more hard questions
    ],
  };

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
    let currentQuestion = currentQuestions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
      console.log("Correct!");
      score++;
      updateScore();
    } else {
      console.log("Incorrect!");
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
    scoreDiv.innerHTML = `Score: ${score}`;
  }

  function displayFinalScore() {
    console.log("Quiz is finished.");
  }
  
});
