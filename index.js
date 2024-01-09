// Define quiz data
const quizData = [
    {
        question: "1:The full form of CSS is?",
        options: [
            "Cascading Style Sheet",
            "Coloured Special Sheets",
            "Color and Style Sheets",
            "None of the above",
        ],
        correct: 0,
       
    },
    {
        question: "2: What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hypertext Machine Language",
            "Hyperlink and text markup language",
        ],
        correct: 0,
        
    },
    {
        question: "3: What is the JavaScript function used to select an HTML element by its id?",
        options: [
            "document.query",
            "getElementById",
            "SelectElement",
            "findElementById",
        ],
        correct: 1,
    },
    {
        question: "4: In React.js, which hook is used to perform side effects in a function component?",
        options: [
            "useEffect",
            "useState",
            "useContent",
            "useReducer",
        ],
        correct: 0,
    },
    {
        question: "5: Which HTML tag is used to declalre internal CSS?",
        options: [
            "<style>",
            "<link>",
            "<script>",
            "<p>",
        ],
        correct: 0,
    }
];

// JavaScript initialization
const answerElms = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll("#question, .option_1, .option_2, .option_3, .option_4");
const submitBtn = document.querySelector("#submit");
let currentQuiz = 0;
let score = 0;

// Load quiz function
const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    console.log(options);
    questionElm.innerText = question;

    options.forEach(
        (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    );
};

loadQuiz();

// get selected Answer Function on Button Click
const getSelectedOption = () => {
   
    let answerElement = Array.from(answerElms)
    return answerElement.findIndex((curElem)=> curElem.checked);
};

//deselected
const deselectedAnswer =()=>{
    return answerElms.forEach((curElem)=> curElem.checked = false);
}

submitBtn.addEventListener('click', () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex === quizData[currentQuiz].correct){
        score = score+1;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length){
        deselectedAnswer();
        loadQuiz();
    }else
    {
        const quiz = document.getElementById('quiz');
        quiz.innerHTML = `
            <div class="result">
                <h2>Your Score: ${score}/${quizData.length} Correct Answer</h2>
                <p>Congratulations on completing the quiz!</p>
                <button class="reload-button" onclick="location.reload()">Play again</button>
            </div>
        `;
    }

});
