const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-option'));

let currentQuestion ={};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let question = [
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
