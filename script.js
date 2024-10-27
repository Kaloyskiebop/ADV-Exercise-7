const questions = [
    {
        question: "Which animal is known as the only mammal capable of true flight?",
        options: ["Eagle", "Penguin", "Bat", "Flying Squirrel"],
        answer: "Bat"
    },
    {
        question: "What is a group of lions called?",
        options: ["Pack", "Pride", "Flock", "Herd"],
        answer: "Pride"
    },
    {
        question: "Which animal can sleep while standing up?",
        options: ["Horse", "Elephant", "Kangaroo", "Zebra"],
        answer: "Horse"
    },
    {
        question: "What type of animal is a 'platypus'?",
        options: ["Bird", "Fish", "Mammal", "Reptile"],
        answer: "Mammal"
    },
    {
        question: "Which animal is known for its black and white stripes?",
        options: ["Tiger", "Leopard", "Zebra", "Panda"],
        answer: "Zebra"
    },
    {
        question: "What is the largest species of shark?",
        options: ["Great White Shark", "Hammerhead Shark", "Whale Shark", "Bull Shark"],
        answer: "Whale Shark"
    },
    {
        question: "Which animal has the longest lifespan?",
        options: ["Elephant", "Blue Whale", "Galapagos Tortoise", "Bald Eagle"],
        answer: "Galapagos Tortoise"
    },
    {
        question: "What type of animal is the 'orca' commonly known as?",
        options: ["Dolphin", "Whale", "Shark", "Fish"],
        answer: "Dolphin"
    },
    {
        question: "Which bird is known for its ability to mimic sounds, including human speech?",
        options: ["Sparrow", "Crow", "Parrot", "Eagle"],
        answer: "Parrot"
    },
    {
        question: "What animal has the strongest bite force relative to its size?",
        options: ["Alligator", "Crocodile", "Hyena", "Tasmanian Devil"],
        answer: "Tasmanian Devil"
    }
];

let score = 0;
let currentQuestion = 0;
const quizContainer = document.getElementById('quiz');
const scoreContainer = document.getElementById('score');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const introContainer = document.getElementById('intro');
const startButton = document.getElementById('start');

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        const optionsHtml = q.options.map((option, index) =>
            `<li>
                <input type="radio" name="question${currentQuestion}" value="${option}" id="option${index}">
                <label for="option${index}">${option}</label>
            </li>`
        ).join('');
        
        quizContainer.innerHTML = `
            <div class="question">
                <h3>${q.question}</h3>
                <ul class="options">${optionsHtml}</ul>
            </div>
        `;
    } else {
        showScore();
    }
}

function showScore() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    scoreContainer.innerHTML = `Your score is ${score} out of ${questions.length}.`;
    retryButton.style.display = 'block';
}

startButton.addEventListener('click', () => {
    introContainer.style.display = 'none';
    resetQuiz();
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    loadQuestion();
});

submitButton.addEventListener('click', () => {
    const selectedOption = document.querySelector(`input[name="question${currentQuestion}"]:checked`);
    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        loadQuestion();
    } else {
        alert("Please select an answer before submitting.");
    }
});

retryButton.addEventListener('click', () => {
    introContainer.style.display = 'none';
    resetQuiz();
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    loadQuestion();
});

function resetQuiz() {
    score = 0;
    currentQuestion = 0;
    scoreContainer.innerHTML = '';
    quizContainer.innerHTML = '';
    retryButton.style.display = 'none';
}

loadQuestion();