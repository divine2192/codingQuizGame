
let currentQuestion = 0;
let score = 0;
let timer;
const quizTime = 60; // in seconds

function displayQuestion() {
    const questionElem = document.getElementById('questions');
    const choicesElem = document.getElementById('choices');
    const questions = questions[currentQuestion];

    questionElem.textContent = question.question;
    choicesElem.innerHTML = '';

    questions.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(choice));
        choicesElem.appendChild(button);
    });
}

function checkAnswer(choice) {
    const questions = questions[currentQuestion];
    if (choice === questions.answer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function startQuiz() {
    document.getElementById('start-btn').style.display = 'none';
    displayQuestion();

    timer = setInterval(() => {
        quizTime--;
        document.getElementById('timer').textContent = quizTime;

        if (quizTime <= 0) {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById('timer').textContent = 0;

    const container = document.querySelector('.container');
    container.innerHTML = `<h2>Quiz Ended!</h2><p>Your score: ${score}/${questions.length}</p>`;
}

document.getElementById('start-btn').addEventListener('click', startQuiz);