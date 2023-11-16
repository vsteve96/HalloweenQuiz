document.addEventListener("DOMContentLoaded", function () {
  let gameArea = document.querySelector(".game-area");
  let scoreArea = document.querySelector(".score-area");
  let questionElement = document.querySelector(".question");
  let answersElement = document.querySelector(".answers");
  let button = document.getElementById("btn");

  let questions = [
    {
      question: "What's another name for a lycanthrope?",
      answers: ["Vampire", "Werewolf", "Dragon", "Mermaid"],
      correctAnswer: "Werewolf",
    },
    {
      question: "What is 2 + 2?",
      answers: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    // Add more questions here
  ];

  let currentQuestionIndex = 0;

  if (currentQuestionIndex === 0) {
    button.textContent = "Start Quiz";
  }

  button.addEventListener("click", function () {
    // Show game area
    gameArea.style.display = "block";
    scoreArea.style.display = "block";

    // Set button text based on the current question index

    if (currentQuestionIndex < questions.length - 1) {
      button.textContent = "Next Question";
    } else {
      button.textContent = "Finish";
    }

    // Display current question
    displayQuestion();
  });

  function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";

    // Display answer choices
    currentQuestion.answers.forEach(function (answer) {
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
    let currentQuestion = questions[currentQuestionIndex];

    // Check if the selected answer is correct
    if (selectedAnswer === currentQuestion.correctAnswer) {
      // Handle correct answer logic (e.g., update score)

      console.log("Correct!");
      addScore();
    } else {
      // Handle incorrect answer logic
      console.log("Incorrect!");
    }

    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      // No more questions, display the final score or completion message
      displayFinalScore();
    }
  }

  function addScore() {}

  function displayFinalScore() {
    // Display the final score or completion message
    scoreArea.textContent =
      "Quiz completed! Display the final score or completion message here.";
  }
});
