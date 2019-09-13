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
    return window.location.assign("/end.html");
}

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;
    choices.forEach( v => {
        const number = v.dataset['number'];
        let optionArray = Array.from(currentQuestion.options);
        index = number-1;
        // console.log(optionArray[index])
        choices[index].innerText =optionArray[index];     
    });
    // console.log(availableQuestion);

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
        console.log(selectedOptionHTML);
        console.log(selectedAnswerIndex);
        getQuestion();
    })
})

startGame();