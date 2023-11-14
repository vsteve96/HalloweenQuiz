document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    let gameArea = document.querySelector(".game-area");
    let question = document.querySelector(".question");
    let answers = document.querySelector(".answers");
    let button = document.getElementById("btn");

    let questions = [
        {
            question: "What's another name for a lycanthrope?",
            answers: ["Vampire", "Werewolf", "Dragon", "Mermaid"],
            correctAnswer: "Werewolf",
        },
        {
            question: "",
            answers: ["x", "y"],
            correctAnswer: "",
        }
        // Add more questions here
    ];

    // Function to hide game area by default
    function hideGameArea() {
        gameArea.style.display = "none";
    }
    hideGameArea();

    button.addEventListener('click', function (e) {
        startQuiz();
    });

    // Function to start the quiz
    function startQuiz() {
        // Display game area
        gameArea.style.display = "block";

        // Display current question
        displayQuestion();
    }

    let currentQuestionIndex = 0;

    function displayQuestion() {
        let currentQuestion = questions[currentQuestionIndex];

        question.textContent = currentQuestion.question;
        answers.innerHTML = "";
    }

    // Change button text to "Next Question" if not the last question
    if (currentQuestionIndex < questions.length) {
        button.textContent = "Next Question";
    } else {
        // Change button text to "Finish" if it's the last question
        button.textContent = "Finish";
    }
});