const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-option'));
const questionAccessed = document.getElementById('questionAccessed'); 
const bar = document.getElementById('bar'); 
const scoreText = document.getElementById('score'); 

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
        answer: 4
    },
    {
        question: "Who is from Argentina?",
        options: [
            "Ronaldo C",
            "Messi L",
            "Tendulkar S",
            "Smith S"
        ],
        answer: 2
    },
    {
        question: "Which one is blue?",
        options: [
            "Olive",
            "Ivory",
            "Maroon",
            "Sea"
        ],
        answer: 4
    },
    {
        question: "Which one is red?",
        options: [
            "Olive",
            "Ivory",
            "Maroon",
            "Sea"
        ],
        answer: 3
    }
]

const bonus = 1;
const maxQuestion = 4;

//Initiating the game

startGame = () => {
    questionCounter = 0;
    score = 0 ;
    availableQuestion = [...questions];
    getQuestion();
}

//Getting questions in random by checking the availablity of questions

getQuestion=() => {
if(availableQuestion.length ===0 || questionCounter >= maxQuestion){
    //Go to end.html page
    return window.location.assign("/end.html");
}

    questionCounter++;
    bar.style.width = ((questionCounter/maxQuestion)*100)+'%';
    questionAccessed.innerText = "Questions "+questionCounter +"/"+maxQuestion;
    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;
    choices.forEach( v => {
        const number = v.dataset['number'];
        let optionArray = Array.from(currentQuestion.options);
        index = number-1;
        choices[index].innerText =optionArray[index];     
    });

    //Splicing the loaded question

    availableQuestion.splice(questionIndex,1);
    console.log(availableQuestion);
    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedOptionHTML = e.target;
        const selectedAnswerIndex = selectedOptionHTML.dataset['number'];

        //To check whether the selected option is correct
        //Using ternary operator

        const createClass = selectedAnswerIndex == currentQuestion.answer? 
        'correct': 'incorrect';
        // console.log(createClass);

        if(createClass==='correct'){
            increamentScore(bonus);
        }

        selectedOptionHTML.parentElement.classList.add(createClass);

        setTimeout( ()=> {
            selectedOptionHTML.parentElement.classList.remove(createClass);
            getQuestion();
        }, 1000);
        
    })
})

increamentScore = num => {
    
    score += num;
    scoreText.innerText =score;
    console.log(scoreText.innerText)
}

startGame();