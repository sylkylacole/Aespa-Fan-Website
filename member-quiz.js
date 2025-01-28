// // Import questions, answers, etc etc and give an id or class

// const scoreArea = document.getElementById("score-div");



// // Set the score
// let score = 0;







// // Import the submit button

// const submit = document.getElementById("submit-button");

// // When you click submit, check if the answers are correct

// // Count correct answers and display it in a ratio via html below the title of the html page


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // code will go here
    };

    function showResults(questions, quizContainer, resultsContainer){
        // code will go here
    };

    // show the questions
    showQuestions(questions, quizContainer);

    // when user clicks submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    };
};