document.addEventListener("DOMContentLoaded", function;
   // Get elements
    const quizContainer = document.getElementsByClassName("quiz-container");
const gameArea = document.getElementsByClassName("game-area");
const questionDiv = document.getElementsByClassName("question");
const answersDiv = document.getElementsByClassName("answers");
const buttonDiv = document.getElementsByClassName("button");

const questions = [
    {
        question: "What's another name for a lycanthrope?",
        answers: ["Vampire", "Werewolf", "Dragon", "Mermaid"],
        correctAnswer: "Werewolf",
    },
    // Add more questions here
];

let currentQuestionIndex = 0;

// Function to start the quiz
function startQuiz() {
    gameArea.style.display = "block";
    displayQuestion();
}
