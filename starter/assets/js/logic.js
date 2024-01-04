
let currentQuestion = 0;
let score = 0;
let timer;
let initials = '';
let quizTime = 60; // in seconds

let questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        answer: "Hyper Text Markup Language"
    }, 
     {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Who is making the Web standards?",
        choices: ["Google", "Microsoft", "Mozilla"," Web Corsortium"],
        answer: "Web Corsortium"
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        choices: ["<h6>", "<heading>", "<h1>"," <head>"],
        answer: "<h1>"
    },
    {
        question: "Which character is used to indicate an end tag?",
        choices: ["~", "*", "/" , "<"],
        answer: "<"
    }
    // quiz questions
];

function displayQuestion() {
    let questionElem = document.getElementById('questions');
    let choicesElem = document.getElementById('choices');
    let question = questions[currentQuestion];

    questionElem.textContent = question.question;
    choicesElem.innerHTML = '';

    question.choices.forEach(choice => {
        let button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(choice));
        choicesElem.appendChild(button);
    });
}

function checkAnswer(choice) {
    const question = questions[currentQuestion];
    if (choice === question.answer) {
        score++;
        
    }else{
          quizTime -= 10;
          if (quizTime < 1){
            quizTime = 0;
          }  
        }//subtract 10 seconds for every incorrect answer

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
    container.classList.add('hide');

    const endScreen = document.getElementById('end-screen');
    endScreen.classList.remove('hide');
    document.getElementById('final-score').textContent = score + '/' + questions.length;
   
}
function saveScore(){
    const initials = document.getElementById('initials');
    console.log("Initials: " + initials + ", Score: " + score);
}
document.getElementById('start-btn').addEventListener('click', startQuiz);