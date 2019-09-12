const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-option'));

let currentQuestion ={};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
    {
        question : "Which one is correct team name in NBA?",
        options : [
            "New York Bulls",
            "Los Angeles Kings",
            "Golden State Warriros",
            "Huston Rocket"
        ],
        answer: "Huston Rocket"
    },
    {
        question: "Which one is WRONG team name in NBA?",
        options: [
            "New York Bulls",
            "Los Angeles Kings",
            "Golden State Warriros",
            "Huston Rocket"
        ],
        answer: "Huston Rocket"
    },
    {
        question: "Which one is blue?",
        options: [
            "New York Bulls",
            "Los Angeles Kings",
            "Golden State Warriros",
            "Huston Rocket"
        ],
        answer: "Huston Rocket"
    },
    {
        question: "Which one is red?",
        options: [
            "New York Bulls",
            "Los Angeles Kings",
            "Golden State Warriros",
            "Huston Rocket"
        ],
        answer: "Huston Rocket"
    }
]

const bonus = 1;
const maxQuestion = 4;

startGame = () => {
    questionCounter = 0;
    score = 0 ;
    availableQuestion = [...questions];
    getQuestion();
}

getQuestion=() => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    ;
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;
    console.log(currentQuestion)

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion.options[choice];
        console.log(choice.innerText);
    })
}

startGame();