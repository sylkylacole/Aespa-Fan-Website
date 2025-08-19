// import html elements to js

const scoreDiv = document.getElementById("score-div");
const submitButton = document.getElementById("submit-button");

let score = 0;

// create the function for what occurs when you click the button

function submitQuiz() {
    const q1 = document.getElementById("winter-radio.1");
    const q2 = document.getElementById("giselle-radio.2");
    const q3 = document.getElementById("karina-radio.3");
    const q4 = document.getElementById("ningning-radio.4");

    if (q1.checked) {
        score += 1;
    }
    if (q2.checked) {
        score += 1;
    }
    if (q3.checked) {
        score += 1;
    }
    if (q4.checked) {
        score += 1;
    }

    scoreDiv.innerHTML = `Your score is ${score}/4`;

    console.log(score);
}


// create the feature where the submit button scrolls to the top when pressed so that you can see the score

var rootElement = document.documentElement;

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    submitQuiz();
});

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

submitButton.addEventListener("click", scrollToTop);



