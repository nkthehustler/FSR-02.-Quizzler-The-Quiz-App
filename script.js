// creating quiz question in JSON
const questions = [{
  question: "Which planet is known as the Red Planet?",
  answers: [{
        text: "Mars",
        icon: "bi bi-1-circle-fill",
        correct: true
     },
     {
        text: "Jupiter",
        icon: "bi bi-2-circle-fill",
        correct: false
     },
     {
        text: "Venus",
        icon: "bi bi-3-circle-fill",
        correct: false
     },
     {
        text: "Mercury",
        icon: "bi bi-4-circle-fill",
        correct: false
     },
  ],
},
{
  question: "What is the chemical symbol for water?",
  answers: [{
        text: "H2O",
        icon: "bi bi-1-circle-fill",
        correct: true
     },
     {
        text: "CO2",
        icon: "bi bi-2-circle-fill",
        correct: false
     },
     {
        text: "NaCl",
        icon: "bi bi-3-circle-fill",
        correct: false
     },
     {
        text: "O2",
        icon: "bi bi-4-circle-fill",
        correct: false
     },
  ],
},
{
  question: "Who wrote 'Romeo and Juliet'?",
  answers: [{
        text: "William Shakespeare",
        icon: "bi bi-1-circle-fill",
        correct: true,
     },
     {
        text: "Charles Dickens",
        icon: "bi bi-2-circle-fill",
        correct: false
     },
     {
        text: "Jane Austen",
        icon: "bi bi-3-circle-fill",
        correct: false
     },
     {
        text: "Mark Twain",
        icon: "bi bi-4-circle-fill",
        correct: false
     },
  ],
},
{
  question: "What is the tallest mammal?",
  answers: [{
        text: "Elephant",
        icon: "bi bi-1-circle-fill",
        correct: false
     },
     {
        text: "Giraffe",
        icon: "bi bi-2-circle-fill",
        correct: true
     },
     {
        text: "Hippopotamus",
        icon: "bi bi-3-circle-fill",
        correct: false
     },
     {
        text: "Rhino",
        icon: "bi bi-4-circle-fill",
        correct: false
     },
  ],
},
{
  question: "Who painted the Mona Lisa?",
  answers: [{
        text: "Vincent van Gogh",
        icon: "bi bi-1-circle-fill",
        correct: false
     },
     {
        text: "Leonardo da Vinci",
        icon: "bi bi-2-circle-fill",
        correct: true
     },
     {
        text: "Pablo Picasso",
        icon: "bi bi-3-circle-fill",
        correct: false
     },
     {
        text: "Michelangelo",
        icon: "bi bi-4-circle-fill",
        correct: false
     },
  ],
},
{
  question: "Which country is known as the Land of the Rising Sun?",
  answers: [{
        text: "China",
        icon: "bi bi-1-circle-fill",
        correct: false
     },
     {
        text: "India",
        icon: "bi bi-2-circle-fill",
        correct: false
     },
     {
        text: "Japan",
        icon: "bi bi-3-circle-fill",
        correct: true
     },
     {
        text: "South Korea",
        icon: "bi bi-4-circle-fill",
        correct: false
     },
  ],
},
{
  question: "What is the largest ocean in the world?",
  answers: [{
        text: "Atlantic Ocean",
        icon: "bi bi-1-circle-fill",
        correct: false
     },
     {
        text: "Indian Ocean",
        icon: "bi bi-2-circle-fill",
        correct: false
     },
     {
        text: "Arctic Ocean",
        icon: "bi bi-3-circle-fill",
        correct: false
     },
     {
        text: "Pacific Ocean",
        icon: "bi bi-4-circle-fill",
        correct: true
     },
  ],
},
{
  question: "Which monument is one of the Seven Wonders of the World located in India?",
  answers: [{
        text: "Eiffel Tower",
        icon: "bi bi-1-circle-fill",
        correct: false
     },
     {
        text: "Statue of Liberty",
        icon: "bi bi-2-circle-fill",
        correct: false
     },
     {
        text: "Taj Mahal",
        icon: "bi bi-3-circle-fill",
        correct: true
     },
     {
        text: "Great Wall of China",
        icon: "bi bi-4-circle-fill",
        correct: false
     },
  ],
},

{
  question: "What is the capital of Australia?",
  answers: [{
        text: "Sydney",
        icon: "bi bi-1-circle-fill",
        correct: false
     },
     {
        text: "Melbourne",
        icon: "bi bi-2-circle-fill",
        correct: false
     },
     {
        text: "Canberra",
        icon: "bi bi-3-circle-fill",
        correct: true
     },
     {
        text: "Brisbane",
        icon: "bi bi-4-circle-fill",
        correct: false
     },
  ],
},
{
  question: "What is the powerhouse of the cell?",
  answers: [{
        text: "Nucleus",
        icon: "bi bi-1-circle-fill",
        correct: false
     },
     {
        text: "Ribosome",
        icon: "bi bi-2-circle-fill",
        correct: false
     },
     {
        text: "Mitochondrion",
        icon: "bi bi-3-circle-fill",
        correct: true
     },
     {
        text: "Endoplasmic reticulum",
        icon: "bi bi-4-circle-fill",
        correct: false,
     },
  ],
},
];

// getting all elements
const questionheadingElement = document.getElementById("question-heading");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

// Start the quiz and set next button contents
function startQuiz() {
currentQuestionIndex = 0;
score = 0;
showQuestions();
}

// Show questions
function showQuestions() {
resetState();
let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = currentQuestion.question;
questionheadingElement.innerHTML = `Question ${questionNo}/${questions.length}`;

currentQuestion.answers.forEach((answer) => {
  const button = document.createElement("button");
  button.innerHTML = `<i class="${answer.icon}"></i>${answer.text}`;
  button.classList.add("btn");
  button.addEventListener("click", () => selectAnswer(answer.correct));
  answerButtons.appendChild(button);
  if (answer.correct) {
     button.dataset.correct = answer.correct;
  }
  button.addEventListener("click", selectAnswer);
});
}

// reset previous answers
function resetState() {
nextButton.style.display = "none";
while (answerButtons.firstChild) {
  answerButtons.removeChild(answerButtons.firstChild);
}
}

function selectAnswer(e) {
const slelectedBtn = e.target;
const isCorrect = slelectedBtn.dataset.correct === "true";
if (isCorrect) {
  slelectedBtn.classList.add("correct");
  score++;
} else {
  slelectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach((button) => {
  if (button.dataset.correct === "true") {
     button.classList.add("correct");
  }
  button.disabled = true;
});
nextButton.style.display = "block";
}

function showScore() {
resetState();
nextButton.style.display = "block";
nextButton.innerHTML = `Redirecting`;
// redirecting quiz.html to score.html with params as: score and total questions
window.location.href = `score.html?score=${score}&total=${questions.length}`;
}

// handling next button
function handlenextButton() {
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
  showQuestions();
} else {
  showScore();
}
}

// restarting the quiz after resetting
nextButton.addEventListener("click", () => {
if (currentQuestionIndex < questions.length) {
  handlenextButton();
} else {
  startQuiz();
}
});

// starting the quiz for the first time
startQuiz();